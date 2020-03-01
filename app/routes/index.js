const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 },
  ];
  const tagline = 'Any code of your own that you haven\'t looked at for six or more months might as well have been written by someone else.';

  res.render('pages/index', {
    drinks,
    tagline,
  });
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
