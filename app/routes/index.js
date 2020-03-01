const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/index');
});

// list page
router.get('/list', (req, res) => {
  res.render('pages/list');
});

// detail page
router.get('/detail', (req, res) => {
  res.render('pages/detail');
});

module.exports = router;
