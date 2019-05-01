const express = require('express');

const ensureLogin = require('connect-ensure-login');


const router = express.Router();
const Users = require('../models/User.js');

router.get('/edit/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  res.render('profile-edit', { user: req.user });
});

router.get('/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Users.findById({ _id: req.params.id })
    .then((result) => {
      res.render('profile', { user: req.user, name: result });
    });
});

router.post('/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const { nickname, password, email, birthday } = req.body;
  console.log(req.params.id, nickname, password, email, birthday)
  Users.findByIdAndUpdate(req.params.id, { $set: { nickname, password, email, birthday } })
    .then((result) => {
      console.log(result)
      res.redirect(`/profile/${req.params.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
