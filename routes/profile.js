const express = require('express');

const ensureLogin = require('connect-ensure-login');


const router = express.Router();
const Users = require('../models/User.js');

router.get('/edit', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  res.render('profile-edit', { user: req.user });
});

router.get('/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Users.findById({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.render('profile', { user: req.user, name: result });
    });
});

module.exports = router;
