const { pool, formatProgress } = require('../db');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Extract userId from req.query (Vercel) or fallback to url path
  let userId = req.query ? req.query.userId : null;
  if (!userId && req.url) {
    const parts = req.url.split('?')[0].split('/');
    userId = parts[parts.length - 1];
  }

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  // Handle local or string guest ids safely
  const numericUserId = parseInt(userId, 10);
  if (isNaN(numericUserId)) {
    return res.status(200).json({ message: 'Non-numeric ID ignored for remote DB', progress: null });
  }

  if (req.method === 'GET') {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM user_progress WHERE user_id = ? LIMIT 1',
        [numericUserId]
      );
      if (!rows || rows.length === 0) {
        return res.status(200).json({ progress: null });
      }
      return res.status(200).json({ progress: formatProgress(rows[0]) });
    } catch (error) {
      console.error('Get Progress Error:', error);
      return res.status(500).json({ error: 'Failed to retrieve progress' });
    }
  }

  if (req.method === 'POST') {
    try {
      const payload = req.body || {};
      
      const streak = Number.isInteger(payload.streak) ? payload.streak : 0;
      const lastPlayDate = payload.lastPlayDate || null;
      const totalXp = Number.isInteger(payload.totalXp) ? payload.totalXp : 0;
      const todayXp = Number.isInteger(payload.todayXp) ? payload.todayXp : 0;
      const hearts = Number.isInteger(payload.hearts) ? payload.hearts : 5;
      const koreanXp = Number.isInteger(payload.koreanXp) ? payload.koreanXp : 0;
      const englishXp = Number.isInteger(payload.englishXp) ? payload.englishXp : 0;
      const toeflXp = Number.isInteger(payload.toeflXp) ? payload.toeflXp : 0;
      const completedLessons = JSON.stringify(Array.isArray(payload.completedLessons) ? payload.completedLessons : []);
      const completedUnits = JSON.stringify(Array.isArray(payload.completedUnits) ? payload.completedUnits : []);
      const unlockedAchievements = JSON.stringify(Array.isArray(payload.unlockedAchievements) ? payload.unlockedAchievements : []);
      const totalLessons = Number.isInteger(payload.totalLessons) ? payload.totalLessons : 0;
      const koreanLessons = Number.isInteger(payload.koreanLessons) ? payload.koreanLessons : 0;
      const englishLessons = Number.isInteger(payload.englishLessons) ? payload.englishLessons : 0;
      const toeflLessons = Number.isInteger(payload.toeflLessons) ? payload.toeflLessons : 0;
      const perfectScores = Number.isInteger(payload.perfectScores) ? payload.perfectScores : 0;
      const toeflActiveTrack = payload.toeflActiveTrack || 'full';
      const fullState = JSON.stringify(payload);

      const sql = `
        INSERT INTO user_progress (
          user_id, streak, last_play_date, total_xp, today_xp, hearts,
          korean_xp, english_xp, toefl_xp,
          completed_lessons, completed_units, unlocked_achievements,
          total_lessons, korean_lessons, english_lessons, toefl_lessons,
          perfect_scores, toefl_active_track, full_state
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          streak = VALUES(streak),
          last_play_date = VALUES(last_play_date),
          total_xp = VALUES(total_xp),
          today_xp = VALUES(today_xp),
          hearts = VALUES(hearts),
          korean_xp = VALUES(korean_xp),
          english_xp = VALUES(english_xp),
          toefl_xp = VALUES(toefl_xp),
          completed_lessons = VALUES(completed_lessons),
          completed_units = VALUES(completed_units),
          unlocked_achievements = VALUES(unlocked_achievements),
          total_lessons = VALUES(total_lessons),
          korean_lessons = VALUES(korean_lessons),
          english_lessons = VALUES(english_lessons),
          toefl_lessons = VALUES(toefl_lessons),
          perfect_scores = VALUES(perfect_scores),
          toefl_active_track = VALUES(toefl_active_track),
          full_state = VALUES(full_state);
      `;

      await pool.query(sql, [
        numericUserId, streak, lastPlayDate, totalXp, todayXp, hearts,
        koreanXp, englishXp, toeflXp,
        completedLessons, completedUnits, unlockedAchievements,
        totalLessons, koreanLessons, englishLessons, toeflLessons,
        perfectScores, toeflActiveTrack, fullState
      ]);

      return res.status(200).json({ message: 'Progress saved successfully to TiDB Cloud!' });
    } catch (error) {
      console.error('Save Progress Error:', error);
      return res.status(500).json({ error: 'Failed to save progress to TiDB Cloud' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

