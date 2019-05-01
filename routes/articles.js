const express = require('express');
const ensureLogin = require('connect-ensure-login');

const router = express.Router();
const Articles = require('../models/Article.js');

router.get('/', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Articles.find()
    .then((result) => {
      res.render('article', { user: req.user, articles: result });
    });
});

router.get('/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Articles.findById({ _id: req.params.id })
    .then((result) => {
      res.render('article', { user: req.user, article: result });
    });
});

module.exports = router;
