const express = require('express');
const ensureLogin = require('connect-ensure-login');

const router = express.Router();
const Articles = require('../models/Article.js');
const uploadCloud = require('../config/cloudinary.js');

router.get('/', (req, res, next) => {
  Articles.find()
    .then((result) => {
      res.render('articles', { user: req.user, articles: result });
    });
});

router.get('/new', (req, res, next) => {
  res.render('createNew', { user: req.user });
});

router.post('/new', uploadCloud.single('photo'), (req, res, next) => {  
  const { title, text } = req.body;  
  const photo = req.file.url;
  const photoName = req.file.originalname; 
  const newArticle = new Articles({ title, text, photo, photoName });  
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
