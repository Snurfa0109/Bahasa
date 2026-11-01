const { pool, formatProgress } = require('./db');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body || {};
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanName = (name || cleanEmail.split('@')[0] || 'Google User').trim();

    if (!cleanEmail) {
      return res.status(400).json({ error: 'Email Google wajib diisi!' });
    }

    // Check if user exists
    let [users] = await pool.query(
      'SELECT id, username, email FROM users WHERE email = ? LIMIT 1',
      [cleanEmail]
    );

    let user;
    if (users.length > 0) {
      user = users[0];
    } else {
      // Create user without password
      const [insertResult] = await pool.query(
        'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
        [cleanName, cleanEmail, '']
      );
      user = {
        id: insertResult.insertId,
        username: cleanName,
        email: cleanEmail
      };
    }

    // Fetch user progress
    const [progressRows] = await pool.query(
      'SELECT * FROM user_progress WHERE user_id = ? LIMIT 1',
      [user.id]
    );

    const progress = progressRows.length > 0 ? formatProgress(progressRows[0]) : null;

    return res.status(200).json({
      message: 'Berhasil login dengan Google!',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      },
      progress
    });
  } catch (error) {
    console.error('Google Auth API Error:', error);
    return res.status(500).json({ error: 'Terjadi kesalahan server saat autentikasi Google.' });
  }
};

