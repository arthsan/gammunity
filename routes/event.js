const express = require('express');

const router = express.Router();
const Events = require('../models/Event.js');

/* GET event page */

router.get('/', (req, res, next) => {
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

router.get('/new', (req, res, next) => {
  res.render('createEvent');
});

router.get('/:id', (req, res, next) => {
  Events.findById({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.render('event-detail', { event: result });
    })
    .catch((error) => {
      console.log('Error while retrieving event details: ', error);
    });
});

module.exports = router;
