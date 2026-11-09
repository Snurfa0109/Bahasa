const { pool, formatProgress } = require('./db');
const bcrypt = require('bcryptjs');

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
    const { email, username, password } = req.body || {};
    const identifier = ((email || username || '')).trim().toLowerCase();

    if (!identifier || !password) {
      return res.status(400).json({ error: 'Email atau username serta password wajib diisi!' });
    }

    // Find user by email OR username (case-insensitive)
    const [users] = await pool.query(
      'SELECT id, username, email, password_hash FROM users WHERE LOWER(email) = ? OR LOWER(username) = ? LIMIT 1',
      [identifier, identifier]
    );

    if (!users || users.length === 0) {
      return res.status(401).json({ error: 'Email/Username atau password salah! Jika belum punya akun, silakan daftar dulu.' });
    }

    const user = users[0];
    if (!user.password_hash) {
      return res.status(401).json({
        error: 'Akun ini terdaftar via Google. Silakan gunakan tombol "Lanjutkan dengan Google" di atas!',
        isGoogleAccount: true
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash || '');
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Email atau password salah! Periksa kembali atau gunakan Lupa Password.' });
    }

    // Fetch progress
    const [progressRows] = await pool.query(
      'SELECT * FROM user_progress WHERE user_id = ? LIMIT 1',
      [user.id]
    );

    const progress = progressRows.length > 0 ? formatProgress(progressRows[0]) : null;

    return res.status(200).json({
      message: 'Login berhasil!',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      },
      progress
    });
  } catch (error) {
    console.error('Login API Error:', error);
    return res.status(500).json({ error: 'Terjadi kesalahan server saat login.' });
  }
};

