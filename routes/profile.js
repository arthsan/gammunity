const express = require('express');
const router = express.Router();

router.get('/profile', (req, res, next) => {
  res.render('profile');
});

router.get('/profile/edit', (req, res, next) => {
  res.render('profile-edit');
});

module.exports = router;
