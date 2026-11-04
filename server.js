require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

// API handlers (shared with Vercel serverless functions)
const healthHandler = require('./api/health');
const loginHandler = require('./api/login');
const registerHandler = require('./api/register');
const googleAuthHandler = require('./api/google-auth');
const progressHandler = require('./api/progress/[userId]');
const pushSubscribeHandler = require('./api/push-subscribe');
const sendReminderHandler = require('./api/send-reminder');
const speakingChatHandler = require('./api/speaking-chat');
const forgotPasswordHandler = require('./api/forgot-password');

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

async function adaptVercelHandler(handler, req, res, query = {}) {
  req.body = await parseBody(req);
  req.query = query;

  res.status = function (code) {
    res.statusCode = code;
    return this;
  };
  res.json = function (data) {
    sendJSON(res, res.statusCode || 200, data);
    return this;
  };
  res.send = function (data) {
    res.end(data);
    return this;
  };

  return handler(req, res);
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
      return adaptVercelHandler(healthHandler, req, res);
    }

    if (pathname === '/api/login') {
      return adaptVercelHandler(loginHandler, req, res);
    }

    if (pathname === '/api/register') {
      return adaptVercelHandler(registerHandler, req, res);
    }

    if (pathname === '/api/forgot-password') {
      return adaptVercelHandler(forgotPasswordHandler, req, res);
    }

    if (pathname === '/api/google-auth') {
      return adaptVercelHandler(googleAuthHandler, req, res);
    }

    if (pathname === '/api/push-subscribe') {
      return adaptVercelHandler(pushSubscribeHandler, req, res);
    }

    if (pathname === '/api/speaking-chat') {
      return adaptVercelHandler(speakingChatHandler, req, res);
    }

    if (pathname === '/api/send-reminder') {
      const isTest = urlObj.searchParams.get('test') === 'true';
      return adaptVercelHandler(sendReminderHandler, req, res, { test: isTest });
    }

    if (pathname.startsWith('/api/progress/')) {
      const userId = pathname.replace('/api/progress/', '').split('/')[0].split('?')[0].trim();
      return adaptVercelHandler(progressHandler, req, res, { userId });
    }

    return sendJSON(res, 404, { error: 'API route not found' });
  }

  // ─── STATIC FILE SERVING ─────────────────────────────────
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  const filePath = path.join(ROOT_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If HTML or unknown route requested, serve index.html (SPA fallback)
      const acceptHeader = req.headers.accept || '';
      if (acceptHeader.includes('text/html')) {
        const indexPath = path.join(ROOT_DIR, 'index.html');
        return fs.readFile(indexPath, (readErr, content) => {
          if (readErr) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
          }
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
            'Cache-Control': 'no-cache'
          });
          res.end(content);
        });
      }

      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // No caching for app code during development, caching for static assets
    const isCode = ext === '.html' || ext === '.js' || ext === '.css' || ext === '.json';
    const cacheHeader = isCode ? 'no-cache, no-store, must-revalidate' : 'public, max-age=86400';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': cacheHeader,
      'Content-Length': stats.size
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 BasaLoka Server with TiDB Cloud running at http://localhost:${PORT}`);
});
