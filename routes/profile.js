const express = require('express');
const bcrypt = require('bcrypt');
const ensureLogin = require('connect-ensure-login');
const uploadCloud = require('../config/cloudinary.js');

const bcryptSalt = 10;
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
  const { nickname, password, username, birthday } = req.body;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  Users.findByIdAndUpdate(req.params.id, { $set: { nickname, password: hashPass, username, birthday } })
    .then((result) => {

      console.log(result)
      res.redirect(`/profile/${req.params.id}`);
    })
});


router.post('/:id/photo', ensureLogin.ensureLoggedIn(), uploadCloud.single('photo'), (req, res, next) => {
  const photo = req.file.url;
  const photoName = req.file.originalname;
  Users.findByIdAndUpdate(req.params.id, { $set: { photo, photoName } })
    .then((result) => {
      console.log(result)
      res.redirect(`/profile/${req.params.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
