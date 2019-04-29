const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('profile');
});

router.get('/edit', (req, res, next) => {
  res.render('profile-edit');
});

module.exports = router;
