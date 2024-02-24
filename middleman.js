const express = require('express');
const router = express.Router();

//Route 1
router.get('/', (req, res) => {
  res.render('welcome');
});

module.exports = router;
