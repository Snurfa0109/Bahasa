const { pool } = require('./db');

module.exports = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    return res.status(200).json({
      status: 'ok',
      db: 'connected',
      solution: rows[0].solution,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      db: 'disconnected',
      error: err.message
    });
  }
};

