const express = require('express');

const router = express.Router();
const Articles = require('../models/Article.js');

router.get('/', (req, res, next) => {
  Articles.find()
    .then((result) => {
      res.render('articles', { articles: result });
    });
});

router.get('/:id', (req, res, next) => {
  Articles.findById({ _id: req.params.id })
    .then((result) => {
      res.render('article', { article: result });
    });
});

module.exports = router;
