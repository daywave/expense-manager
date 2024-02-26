const express = require('express');
const router = express.Router();

//Route 1
router.get('/', (req, res) => {
  res.render('welcome');
});

router.get('/ingresar', (req, res) => {
  res.render('ingresar');
});

router.get('/reporte', (req, res) => {
  res.render('reporte');
});

module.exports = router;
