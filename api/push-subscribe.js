const { pool } = require('./db');
require('dotenv').config();

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // GET: Return VAPID Public Key to client
  if (req.method === 'GET') {
    const publicKey = process.env.VAPID_PUBLIC_KEY || 'BOA7Frh6Eh0d1auW2ALi7zlHEJEi2HSmxHHfFdYMRorqTfmvKpbEzvazpxxM8XoVT5K2Rok6Q9Xp_3aIDyN270I';
    return res.status(200).json({ publicKey });
  }

  // POST: Save or update push subscription
  if (req.method === 'POST') {
    try {
      const { subscription, timeSlot1, timeSlot2, userId } = req.body || {};

      if (!subscription || !subscription.endpoint || !subscription.keys) {
        return res.status(400).json({ error: 'Data subscription push tidak lengkap' });
      }

      const endpoint = subscription.endpoint;
      const p256dh = subscription.keys.p256dh || '';
      const auth = subscription.keys.auth || '';
      const t1 = timeSlot1 || '12:00';
      const t2 = timeSlot2 || '19:00';
      const uid = (userId && !isNaN(parseInt(userId, 10))) ? parseInt(userId, 10) : null;

      const sql = `
        INSERT INTO push_subscriptions (
          user_id, endpoint, p256dh, auth, time_slot_1, time_slot_2, is_active
        ) VALUES (?, ?, ?, ?, ?, ?, 1)
        ON DUPLICATE KEY UPDATE
          user_id = VALUES(user_id),
          p256dh = VALUES(p256dh),
          auth = VALUES(auth),
          time_slot_1 = VALUES(time_slot_1),
          time_slot_2 = VALUES(time_slot_2),
          is_active = 1,
          updated_at = CURRENT_TIMESTAMP;
      `;

      await pool.query(sql, [uid, endpoint, p256dh, auth, t1, t2]);

      return res.status(200).json({
        message: 'Pengingat belajar 2x sehari berhasil diaktifkan!',
        timeSlot1: t1,
        timeSlot2: t2
      });
    } catch (err) {
      console.error('Error in push-subscribe:', err);
      return res.status(500).json({ error: 'Gagal menyimpan langganan pengingat push.' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

