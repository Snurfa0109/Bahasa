const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Disable caching for local development so updates apply instantly
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

app.use(express.static(__dirname, {
  etag: false,
  maxAge: 0,
  setHeaders: (res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  }
}));

// MySQL Connection Configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: 'linguaplay_db'
};

let pool = null;

// Initialize Database & Tables
async function initDB() {
  try {
    // First connect without DB to ensure DB exists
    const initConn = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password
    });

    await initConn.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await initConn.end();

    // Create pool with DB selected
    pool = mysql.createPool({
      ...dbConfig,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(191) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // Create user_progress table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS user_progress (
        user_id INT PRIMARY KEY,
        streak INT DEFAULT 0,
        last_play_date VARCHAR(50) DEFAULT NULL,
        total_xp INT DEFAULT 0,
        today_xp INT DEFAULT 0,
        hearts INT DEFAULT 5,
        korean_xp INT DEFAULT 0,
        english_xp INT DEFAULT 0,
        toefl_xp INT DEFAULT 0,
        completed_lessons JSON,
        completed_units JSON,
        unlocked_achievements JSON,
        total_lessons INT DEFAULT 0,
        korean_lessons INT DEFAULT 0,
        english_lessons INT DEFAULT 0,
        toefl_lessons INT DEFAULT 0,
        perfect_scores INT DEFAULT 0,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    console.log('✅ MySQL Database & Tables initialized successfully (linguaplay_db)');
  } catch (err) {
    console.error('❌ Error initializing MySQL database:', err.message);
  }
}

// ─── API ROUTES ────────────────────────────────────────────────

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', database: pool ? 'connected' : 'disconnected' });
});

// REGISTER
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, dan password wajib diisi!' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password minimal 6 karakter!' });
    }

    // Check existing email
    const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email.trim().toLowerCase()]);
    if (existing.length > 0) {
      return res.status(400).json({ error: 'Email sudah terdaftar. Silakan login!' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Insert user
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
      [username.trim(), email.trim().toLowerCase(), passwordHash]
    );
    const userId = result.insertId;

    // Initialize progress
    const initialProgress = {
      streak: 0,
      lastPlayDate: null,
      totalXp: 0,
      todayXp: 0,
      hearts: 5,
      koreanXp: 0,
      englishXp: 0,
      toeflXp: 0,
      completedLessons: [],
      completedUnits: [],
      unlockedAchievements: [],
      totalLessons: 0,
      koreanLessons: 0,
      englishLessons: 0,
      toeflLessons: 0,
      perfectScores: 0
    };

    await pool.query(
      `INSERT INTO user_progress (
        user_id, streak, last_play_date, total_xp, today_xp, hearts,
        korean_xp, english_xp, toefl_xp, completed_lessons, completed_units,
        unlocked_achievements, total_lessons, korean_lessons, english_lessons,
        toefl_lessons, perfect_scores
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId, initialProgress.streak, initialProgress.lastPlayDate,
        initialProgress.totalXp, initialProgress.todayXp, initialProgress.hearts,
        initialProgress.koreanXp, initialProgress.englishXp, initialProgress.toeflXp,
        JSON.stringify(initialProgress.completedLessons),
        JSON.stringify(initialProgress.completedUnits),
        JSON.stringify(initialProgress.unlockedAchievements),
        initialProgress.totalLessons, initialProgress.koreanLessons,
        initialProgress.englishLessons, initialProgress.toeflLessons,
        initialProgress.perfectScores
      ]
    );

    res.json({
      message: 'Registrasi berhasil!',
      user: { id: userId, username: username.trim(), email: email.trim().toLowerCase() },
      progress: initialProgress
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Terjadi kesalahan pada server saat registrasi.' });
  }
});

// LOGIN
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email dan password wajib diisi!' });
    }

    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email.trim().toLowerCase()]);
    if (users.length === 0) {
      return res.status(400).json({ error: 'Email atau password salah!' });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Email atau password salah!' });
    }

    // Fetch progress
    const [progRows] = await pool.query('SELECT * FROM user_progress WHERE user_id = ?', [user.id]);
    let progress = null;
    if (progRows.length > 0) {
      const row = progRows[0];
      progress = {
        streak: row.streak || 0,
        lastPlayDate: row.last_play_date,
        totalXp: row.total_xp || 0,
        todayXp: row.today_xp || 0,
        hearts: row.hearts !== undefined ? row.hearts : 5,
        koreanXp: row.korean_xp || 0,
        englishXp: row.english_xp || 0,
        toeflXp: row.toefl_xp || 0,
        completedLessons: typeof row.completed_lessons === 'string' ? JSON.parse(row.completed_lessons) : (row.completed_lessons || []),
        completedUnits: typeof row.completed_units === 'string' ? JSON.parse(row.completed_units) : (row.completed_units || []),
        unlockedAchievements: typeof row.unlocked_achievements === 'string' ? JSON.parse(row.unlocked_achievements) : (row.unlocked_achievements || []),
        totalLessons: row.total_lessons || 0,
        koreanLessons: row.korean_lessons || 0,
        englishLessons: row.english_lessons || 0,
        toeflLessons: row.toefl_lessons || 0,
        perfectScores: row.perfect_scores || 0
      };
    }

    res.json({
      message: 'Login berhasil!',
      user: { id: user.id, username: user.username, email: user.email },
      progress
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Terjadi kesalahan pada server saat login.' });
  }
});

// GOOGLE AUTH (Sign In / Sign Up via Google)
app.post('/api/google-auth', async (req, res) => {
  try {
    const { email, name, googleId } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email Google wajib disertakan!' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = (name && name.trim()) ? name.trim() : cleanEmail.split('@')[0];

    // Check if user already exists
    const [existing] = await pool.query('SELECT * FROM users WHERE email = ?', [cleanEmail]);
    let user;

    if (existing.length > 0) {
      user = existing[0];
    } else {
      // Create new user linked to Google
      const dummySalt = await bcrypt.genSalt(10);
      const dummyHash = await bcrypt.hash(`GOOGLE_${googleId || 'OAUTH'}_${Date.now()}`, dummySalt);
      const [insertRes] = await pool.query(
        'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
        [cleanName, cleanEmail, dummyHash]
      );

      user = { id: insertRes.insertId, username: cleanName, email: cleanEmail };

      // Initialize progress
      await pool.query(
        `INSERT INTO user_progress (
          user_id, streak, last_play_date, total_xp, today_xp, hearts,
          korean_xp, english_xp, toefl_xp, completed_lessons, completed_units,
          unlocked_achievements, total_lessons, korean_lessons, english_lessons,
          toefl_lessons, perfect_scores
        ) VALUES (?, 0, NULL, 0, 0, 5, 0, 0, 0, '[]', '[]', '[]', 0, 0, 0, 0, 0)`,
        [user.id]
      );
    }

    // Fetch user progress
    const [progRows] = await pool.query('SELECT * FROM user_progress WHERE user_id = ?', [user.id]);
    let progress = null;
    if (progRows.length > 0) {
      const row = progRows[0];
      progress = {
        streak: row.streak || 0,
        lastPlayDate: row.last_play_date,
        totalXp: row.total_xp || 0,
        todayXp: row.today_xp || 0,
        hearts: row.hearts !== undefined ? row.hearts : 5,
        koreanXp: row.korean_xp || 0,
        englishXp: row.english_xp || 0,
        toeflXp: row.toefl_xp || 0,
        completedLessons: typeof row.completed_lessons === 'string' ? JSON.parse(row.completed_lessons) : (row.completed_lessons || []),
        completedUnits: typeof row.completed_units === 'string' ? JSON.parse(row.completed_units) : (row.completed_units || []),
        unlockedAchievements: typeof row.unlocked_achievements === 'string' ? JSON.parse(row.unlocked_achievements) : (row.unlocked_achievements || []),
        totalLessons: row.total_lessons || 0,
        koreanLessons: row.korean_lessons || 0,
        englishLessons: row.english_lessons || 0,
        toeflLessons: row.toefl_lessons || 0,
        perfectScores: row.perfect_scores || 0
      };
    }

    res.json({
      message: 'Berhasil terhubung dengan Google!',
      user: { id: user.id, username: user.username, email: user.email },
      progress
    });
  } catch (err) {
    console.error('Google auth error:', err);
    res.status(500).json({ error: 'Gagal menghubungkan akun Google.' });
  }
});

// SYNC / SAVE PROGRESS
app.post('/api/progress/:userId', async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const p = req.body;
    if (!userId || !p) {
      return res.status(400).json({ error: 'Invalid user or payload' });
    }

    await pool.query(
      `INSERT INTO user_progress (
        user_id, streak, last_play_date, total_xp, today_xp, hearts,
        korean_xp, english_xp, toefl_xp, completed_lessons, completed_units,
        unlocked_achievements, total_lessons, korean_lessons, english_lessons,
        toefl_lessons, perfect_scores
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        perfect_scores = VALUES(perfect_scores);`,
      [
        userId, p.streak || 0, p.lastPlayDate || null,
        p.totalXp || 0, p.todayXp || 0, p.hearts !== undefined ? p.hearts : 5,
        p.koreanXp || 0, p.englishXp || 0, p.toeflXp || 0,
        JSON.stringify(p.completedLessons || []),
        JSON.stringify(p.completedUnits || []),
        JSON.stringify(p.unlockedAchievements || []),
        p.totalLessons || 0, p.koreanLessons || 0,
        p.englishLessons || 0, p.toeflLessons || 0,
        p.perfectScores || 0
      ]
    );

    res.json({ message: 'Progress saved successfully to MySQL' });
  } catch (err) {
    console.error('Save progress error:', err);
    res.status(500).json({ error: 'Gagal menyimpan progress ke database.' });
  }
});

// START SERVER
initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 LinguaPlay server running at http://localhost:${PORT}`);
  });
});
