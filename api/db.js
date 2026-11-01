// Shared TiDB Cloud MySQL connection pool for Vercel Serverless Functions & Local Dev
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.TIDB_HOST || 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
  port: parseInt(process.env.TIDB_PORT || '4000', 10),
  user: process.env.TIDB_USER || 'sKJk2NP4CS2H7cC.root',
  password: process.env.TIDB_PASSWORD || '',
  database: process.env.TIDB_DATABASE || 'basaloka_db',
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000
});

// Helper to format progress row into clean state object
function formatProgress(row) {
  if (!row) return null;
  let fullState = {};
  if (row.full_state) {
    try {
      fullState = typeof row.full_state === 'string' ? JSON.parse(row.full_state) : row.full_state;
    } catch (e) {
      fullState = {};
    }
  }

  const parseJsonSafe = (val, fallback) => {
    if (!val) return fallback;
    if (typeof val === 'object') return val;
    try { return JSON.parse(val); } catch (e) { return fallback; }
  };

  return {
    ...fullState,
    streak: row.streak ?? fullState.streak ?? 0,
    lastPlayDate: row.last_play_date ?? fullState.lastPlayDate ?? null,
    totalXp: row.total_xp ?? fullState.totalXp ?? 0,
    todayXp: row.today_xp ?? fullState.todayXp ?? 0,
    hearts: row.hearts ?? fullState.hearts ?? 5,
    koreanXp: row.korean_xp ?? fullState.koreanXp ?? 0,
    englishXp: row.english_xp ?? fullState.englishXp ?? 0,
    toeflXp: row.toefl_xp ?? fullState.toeflXp ?? 0,
    completedLessons: parseJsonSafe(row.completed_lessons, fullState.completedLessons || []),
    completedUnits: parseJsonSafe(row.completed_units, fullState.completedUnits || []),
    unlockedAchievements: parseJsonSafe(row.unlocked_achievements, fullState.unlockedAchievements || []),
    totalLessons: row.total_lessons ?? fullState.totalLessons ?? 0,
    koreanLessons: row.korean_lessons ?? fullState.koreanLessons ?? 0,
    englishLessons: row.english_lessons ?? fullState.englishLessons ?? 0,
    toeflLessons: row.toefl_lessons ?? fullState.toeflLessons ?? 0,
    perfectScores: row.perfect_scores ?? fullState.perfectScores ?? 0,
    toeflActiveTrack: row.toefl_active_track ?? fullState.toeflActiveTrack ?? 'full'
  };
}

module.exports = { pool, formatProgress };

