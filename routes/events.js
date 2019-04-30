const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('event-detail');
});

router.get('/:id', (req, res, next) => {
  res.render('event-detail');
});

module.exports = router;
