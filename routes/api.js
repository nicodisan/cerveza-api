const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/barriles
router.get('/barriles', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM barriles');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/clientes
router.get('/clientes', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/estilos
router.get('/estilos', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM estilos');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/lotes
router.get('/lotes', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM lotes');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/remitos
router.get('/remitos', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT r.id, r.numero, r.fecha, c.nombre AS cliente
      FROM remitos r
      JOIN clientes c ON r.cliente_id = c.id
      ORDER BY r.fecha DESC
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;