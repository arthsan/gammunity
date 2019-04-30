const express = require('express');

const router = express.Router();
// const SlackStrategy = require('passport-slack').Strategy;
const passport = require('passport')

const bcrypt = require('bcrypt');
const User = require('../models/User');


router.get('/sign-in', (req, res, next) => {
  res.render('sign-in');
});

router.post('/home', (req, res, next) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === '' || thePassword === '') {
    res.render('sign-in', {
      errorMessage: 'Please enter both, username and password to sign up.',
    });
    return;
  }

  User.findOne({ username: theUsername })
    .then((user) => {
      if (!user) {
        res.render('sign-in', {
          errorMessage: "The username doesn't exist.",
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect('/home');
      } else {
        res.render('index', {
          errorMessage: 'Incorrect password',
        });
      }
    })
    .catch((error) => {
      next(error);
    });
});

// path to start the OAuth flow
// router.get('/auth/slack', passport.authorize('slack'));

// OAuth callback url
// router.get("/auth/slack/callback", passport.authenticate("slack", {
//   successRedirect: "/private-page",
//   failureRedirect: "/"
// }));


router.get('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    // can't access session here
    res.redirect('/event');
  });
});


module.exports = router;