const express = require('express');

const router = express.Router();
const Users = require('../models/User.js');


/* GET home page */
router.get('/', (req, res, next) => {
  Users.find()
    .then((result) => {
      console.log(result[0]);
      res.render('index');
    })
    .catch((error) => {
      console.log('Error while retrieving book details: ', error);
    });
});

router.get('/sign-in', (req, res, next) => {
  res.render('sign-in');
});



router.get('/ranking', (req, res, next) => {
  res.render('ranking');
});



module.exports = router;
