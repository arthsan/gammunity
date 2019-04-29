const express = require('express');
const router = express.Router();

router.get('/events', (req, res, next) => {
  res.render('events');
});

router.get('/events/:id', (req, res, next) => {
  res.render('aevents');
});

module.exports = router;
