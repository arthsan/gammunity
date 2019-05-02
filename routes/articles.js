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

router.get('/new', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  res.render('createNew', { user: req.user });
});

router.post('/new', ensureLogin.ensureLoggedIn(), uploadCloud.single('photo'), (req, res, next) => {  
  const { title, text } = req.body;  
  const photo = req.file.url;
  const photoName = req.file.originalname; 
  console.log(photo);
  const newArticle = new Articles({ title, text, photo, photoName });  
  newArticle.save()
    .then((article) => {
      res.redirect('/article');
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

router.get('/:id/edit', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Articles.findById({ _id: req.params.id })
    .then((result) => {
      res.render('editArticle', { user: req.user, article: result });
    })
    .catch((error) => {
      console.log('Error while retrieving event details: ', error);
    });
});

router.post('/:id/edit', ensureLogin.ensureLoggedIn(), uploadCloud.single('photo'), (req, res, next) => {
  const { title, text, rate } = req.body;
  const photo = req.file.url;
  const photoName = req.file.originalname;
  // eslint-disable-next-line max-len
  Articles.findByIdAndUpdate(req.params.id, { $set: {title, text, photo, photoName, rate }})
    .then((result) => {
      console.log(result);
      res.redirect(`/article/${req.params.id}`);
    })
    .catch((error) => {
      console.log('Error while retrieving event details: ', error);
    });
});

router.get('/:id/delet', (req, res, next) => {
  Articles.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.redirect('/article');
    })
    .catch((error) => {
      console.log('Error while retrieving event details: ', error);
    });
});



module.exports = router;
