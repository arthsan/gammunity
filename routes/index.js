const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/sign-in', (req, res, next) => {
  res.render('sign-in');
});

router.get('/home', (req, res, next) => {
  res.render('home');
});

module.exports = router;
