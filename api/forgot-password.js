/**
 * API Endpoint: /api/forgot-password
 * Secure Account Recovery via Secret Security Question
 */

const { pool } = require('./db');
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
    const { action, email, username, answer, usernameFallback, newPassword } = req.body || {};
    const identifier = ((email || username || '')).trim().toLowerCase();

    if (!identifier) {
      return res.status(400).json({ error: 'Email atau username wajib diisi!' });
    }

    // Step 1: Retrieve user's security question
    if (action === 'get_question') {
      const [users] = await pool.query(
        'SELECT id, username, email, security_question, security_answer_hash FROM users WHERE LOWER(email) = ? OR LOWER(username) = ? LIMIT 1',
        [identifier, identifier]
      );

      if (!users || users.length === 0) {
        return res.status(404).json({ error: 'Akun (email/username) tidak ditemukan di sistem. Pastikan penulisan sudah benar atau daftar akun baru.' });
      }

      const user = users[0];
      const hasQuestion = !!(user.security_question && user.security_answer_hash);

      return res.status(200).json({
        success: true,
        hasQuestion,
        question: hasQuestion ? user.security_question : 'Konfirmasi Nama Pengguna Akunmu'
      });
    }

    // Step 2: Verify answer and update password
    if (action === 'reset_password') {
      if (!newPassword || newPassword.length < 6) {
        return res.status(400).json({ error: 'Password baru minimal 6 karakter!' });
      }

      const [users] = await pool.query(
        'SELECT id, username, email, security_question, security_answer_hash FROM users WHERE LOWER(email) = ? OR LOWER(username) = ? LIMIT 1',
        [identifier, identifier]
      );

      if (!users || users.length === 0) {
        return res.status(404).json({ error: 'Email tidak ditemukan.' });
      }

      const user = users[0];
      const hasQuestion = !!(user.security_question && user.security_answer_hash);

      if (hasQuestion) {
        const cleanAnswer = (answer || '').trim().toLowerCase();
        if (!cleanAnswer) {
          return res.status(400).json({ error: 'Jawaban pertanyaan keamanan wajib diisi!' });
        }

        const match = await bcrypt.compare(cleanAnswer, user.security_answer_hash);
        if (!match) {
          return res.status(401).json({ error: 'Jawaban keamanan tidak cocok! Coba periksa kembali ejaan jawabanmu.' });
        }
      } else {
        // Fallback for older accounts without security question set yet
        const cleanUsername = (usernameFallback || '').trim().toLowerCase();
        if (!cleanUsername || cleanUsername !== (user.username || '').trim().toLowerCase()) {
          return res.status(401).json({ error: 'Nama pengguna tidak cocok dengan akun ini!' });
        }
      }

      // Hash new password and update
      const newHash = await bcrypt.hash(newPassword, 10);
      await pool.query(
        'UPDATE users SET password_hash = ? WHERE id = ?',
        [newHash, user.id]
      );

      return res.status(200).json({
        success: true,
        message: 'Password berhasil diperbarui! Silakan masuk dengan password baru.'
      });
    }

    return res.status(400).json({ error: 'Aksi tidak valid.' });
  } catch (err) {
    console.error('Forgot password error:', err);
    return res.status(500).json({ error: 'Terjadi kesalahan server. Silakan coba beberapa saat lagi.' });
  }
};

