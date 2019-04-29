const express = require('express');
const router = express.Router();

router.get('/articles', (req, res, next) => {
  res.render('articles');
});

router.get('/articles/:id', (req, res, next) => {
  res.render('article');
});

module.exports = router;
