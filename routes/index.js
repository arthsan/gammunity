const express = require('express');

const router = express.Router();
const Users = require('../models/User.js');
const Events = require('../models/Event.js');

/* GET home page */
router.get('/', (req, res, next) => {
  Users.find()
    .then((result) => {
      res.render('index');
    })
    .catch((error) => {
      console.log('Error while retrieving book details: ', error);
    });
});

router.get('/sign-in', (req, res, next) => {
  res.render('sign-in');
});

router.get('/home', (req, res, next) => {
  Events.find()
    .then((result) => {
      let mainEvents;
      let leftEvents;
      const a = result.sort((a, b) => b.rate - a.rate);
      mainEvents = a.slice(0, 3);
      leftEvents = a.slice(3);
      res.render('home', { mainEvent: mainEvents, leftEvent: leftEvents });
    })
    .catch((error) => {
      console.log('Error while retrieving events details: ', error);
    });
});

router.get('/ranking', (req, res, next) => {
  res.render('ranking');
});

router.get('/event/:id', (req, res, next) => {
  res.render('event-detail');
});

module.exports = router;
