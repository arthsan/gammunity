const express = require('express');
const ensureLogin = require('connect-ensure-login');

const router = express.Router();
// const SlackStrategy = require('passport-slack').Strategy;
const passport = require('passport');

router.get('/sign-in', (req, res, next) => {
  res.render('sign-in');
});

router.post('/sign-in', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/sign-in',
  failureFlash: true,
  passReqToCallback: true,
}));

router.get('/home', ensureLogin.ensureLoggedIn(), (req, res) => {
  console.log('!!!!!!!!!!!!!!!!!!', req.user);
  res.render('home', { user: req.user });
});
// path to start the OAuth flow
// router.get('/auth/slack', passport.authorize('slack'));

// OAuth callback url
// router.get('/auth/slack/callback', passport.authenticate('slack', {
//   successRedirect: '/private-page',
//   failureRedirect: '/'
// }));


router.get('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    // can't access session here
    res.redirect('/event');
  });
});


module.exports = router;
