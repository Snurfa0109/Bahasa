const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

// In-memory mock store for users & progress if MySQL is not available
const memoryDB = {
  users: [
    { id: 1, username: 'dzikri', email: 'dzikri@example.com' },
    { id: 2, username: 'benji', email: 'benji@example.com' }
  ],
  progress: {}
};

function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
  });
}

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Cache-Control': 'no-store, no-cache, must-revalidate'
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(urlObj.pathname);

  // ─── API ROUTES ──────────────────────────────────────────
  if (pathname.startsWith('/api/')) {
    if (pathname === '/api/health') {
      return sendJSON(res, 200, { status: 'ok', server: 'BasaLoka Local Dev Server' });
    }

    if (pathname === '/api/users' && req.method === 'GET') {
      return sendJSON(res, 200, { users: memoryDB.users });
    }

    if (pathname === '/api/login' && req.method === 'POST') {
      const { email } = await parseBody(req);
      const user = memoryDB.users.find(u => u.email.toLowerCase() === (email || '').toLowerCase().trim());
      if (user) {
        return sendJSON(res, 200, {
          message: 'Login berhasil!',
          user,
          progress: memoryDB.progress[user.id] || null
        });
      }
      // Demo auto-login / guest fallback
      const newUser = { id: Date.now(), username: email.split('@')[0], email };
      memoryDB.users.push(newUser);
      return sendJSON(res, 200, {
        message: 'Login berhasil!',
        user: newUser,
        progress: null
      });
    }

    if (pathname === '/api/register' && req.method === 'POST') {
      const { username, email } = await parseBody(req);
      const newUser = { id: Date.now(), username: username || 'User', email: email || 'user@example.com' };
      memoryDB.users.push(newUser);
      return sendJSON(res, 200, {
        message: 'Pendaftaran berhasil!',
        user: newUser
      });
    }

    if (pathname === '/api/google-auth' && req.method === 'POST') {
      const { name, email } = await parseBody(req);
      const cleanEmail = (email || 'google_user@example.com').trim().toLowerCase();
      let user = memoryDB.users.find(u => u.email === cleanEmail);
      if (!user) {
        user = { id: Date.now(), username: name || 'Google User', email: cleanEmail };
        memoryDB.users.push(user);
      }
      return sendJSON(res, 200, {
        message: 'Berhasil login dengan Google!',
        user,
        progress: memoryDB.progress[user.id] || null
      });
    }

    if (pathname.startsWith('/api/progress/')) {
      const userId = pathname.replace('/api/progress/', '').trim();
      if (req.method === 'POST') {
        const payload = await parseBody(req);
        memoryDB.progress[userId] = payload;
        return sendJSON(res, 200, { message: 'Progress saved successfully!' });
      }
      if (req.method === 'GET') {
        return sendJSON(res, 200, { progress: memoryDB.progress[userId] || null });
      }
    }

    return sendJSON(res, 404, { error: 'Not found' });
  }

  // ─── STATIC FILE SERVING ─────────────────────────────────
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  const filePath = path.join(ROOT_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // SPA Fallback: serve index.html for non-asset routes
      const ext = path.extname(filePath);
      if (!ext || ext === '.html') {
        return serveFile(path.join(ROOT_DIR, 'index.html'), res);
      }
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      return res.end('404 Not Found');
    }

    serveFile(filePath, res);
  });
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
      return res.end('500 Server Error');
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    });
    res.end(data);
  });
}

server.listen(PORT, () => {
  console.log(`🚀 BasaLoka dev server is running live at http://localhost:${PORT}`);
  console.log(`📁 Serving directory: ${ROOT_DIR}`);
});

