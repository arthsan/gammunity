// routes/auth-routes.js
const express = require('express');

const authRoutes = express.Router();

// User model
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Bcrypt to encrypt passwords
const bcryptSalt = 10;

authRoutes.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

authRoutes.post('/signup', (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;

  if (username === '' || password === '') {
    res.render('auth/signup', { message: 'Indicate username and password' });
    return;
  }

  User.findOne({ username })
    .then((user) => {
      if (user !== null) {
        res.render('auth/signup', { message: 'The username already exists' });
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
          res.render('auth/signup', { message: 'Something went wrong' });
        } else {
          res.redirect('/');
        }
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = authRoutes;
