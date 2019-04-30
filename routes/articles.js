const express = require('express');

const router = express.Router();
const Articles = require('../models/Article.js');

router.get('/', (req, res, next) => {
  res.render('articles');
});

router.get('/:id', (req, res, next) => {
  Articles.findById({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.render('article', { article: result });
    });
});

module.exports = router;


router.get('/:id', (req, res, next) => {
  Users.findById({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.render('profile', { name: result });
    });
});
