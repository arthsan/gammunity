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
  res.render('createNew', { user: req.user });
});

router.post('/new', (req, res, next) => {  
  const { title, photo, text } = req.body;  
  const newArticle = new Articles({ title, photo, text });  
  newArticle.save()
    .then((article) => {
      res.render('articles');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/:id', (req, res, next) => {
  Articles.findById({ _id: req.params.id })
    .then((result) => {
      res.render('article', { user: req.user, article: result });
    });
});

module.exports = router;
