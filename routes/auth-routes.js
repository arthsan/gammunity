// routes/auth-routes.js
const express = require('express');
const passport = require('passport');

const router = express.Router();

// User model
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Bcrypt to encrypt passwords
const bcryptSalt = 10;

router.get('/', (req, res, next) => {
  if (req.session.currentUser) {
    res.render('articles');
    return;
  }
  res.render('index');
});

router.post('/home', (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;
  const { passCheck } = req.body;

  if (username === '' || password === '' || passCheck === '') {
    res.render('index', { message: 'Indicate username and password' });
    return;
  }

  if (passCheck !== password) {
    res.render('index', { message: 'Check your password' });
  }

  User.findOne({ username })
    .then((user) => {
      if (user !== null) {
        res.render('index', { message: 'The username already exists' });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        username,
        password: hashPass,
      });

      newUser.save((err) => {
        if (err) {
          res.render('index', { message: 'Something went wrong' });
        } else {
          res.redirect('/home');
        }
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
