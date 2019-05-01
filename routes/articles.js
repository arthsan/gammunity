const express = require('express');
const ensureLogin = require('connect-ensure-login');

const router = express.Router();
const Articles = require('../models/Article.js');

router.get('/', (req, res, next) => {
  Articles.find()
    .then((result) => {
      res.render('articles', { user: req.user, articles: result });
    });
});

router.get('/new', (req, res, next) => {
  res.render('createNew');
});

router.get('/:id', (req, res, next) => {
  Articles.findById({ _id: req.params.id })
    .then((result) => {
      res.render('article', { user: req.user, article: result });
    });
});

module.exports = router;
