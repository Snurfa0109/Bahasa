const { pool } = require('./db');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
  // Set CORS headers
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
    const { username, email, password } = req.body || {};
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanUsername = (username || '').trim();

    if (!cleanEmail || !cleanUsername || !password) {
      return res.status(400).json({ error: 'Semua kolom wajib diisi!' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password minimal 6 karakter!' });
    }

    // Check if email already exists
    const [existing] = await pool.query('SELECT id FROM users WHERE email = ? LIMIT 1', [cleanEmail]);
    if (existing && existing.length > 0) {
      return res.status(409).json({ error: 'Email sudah terdaftar. Silakan login!' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const [insertResult] = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
      [cleanUsername, cleanEmail, passwordHash]
    );

    const newUser = {
      id: insertResult.insertId,
      username: cleanUsername,
      email: cleanEmail
    };

    return res.status(201).json({
      message: 'Pendaftaran berhasil!',
      user: newUser
    });
  } catch (error) {
    console.error('Register API Error:', error);
    return res.status(500).json({ error: 'Terjadi kesalahan server saat mendaftar.' });
  }
};

