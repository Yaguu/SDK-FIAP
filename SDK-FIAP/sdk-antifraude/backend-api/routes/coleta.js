const express = require('express');
const router = express.Router();
const analisar = require('../utils/analisador');

router.post('/', (req, res) => {
  const resultado = analisar(req.body);
  console.log("Análise:", resultado);
  res.json({ status: "ok", risco: resultado });
});

module.exports = router;
