// routes/auth-routes.js
const express = require('express');
const passport = require('passport');
const ensureLogin = require('connect-ensure-login');

const router = express.Router();

// User model
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Events = require('../models/Event.js');
const uploadCloud = require('../config/cloudinary.js');

// Bcrypt to encrypt passwords
const bcryptSalt = 10;

router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {
  const { username, password, passCheck } = req.body;

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
          res.render('sign-in', { message: 'Account created!' });
        }
      });
    })
    .catch((error) => {
      next(error);
    });
});

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
  Events.find()
    .then((result) => {
      let mainEvents;
      let leftEvents;
      const obj = {};
      const a = result.sort((a, b) => b.rate - a.rate);
      mainEvents = a.slice(0, 3);
      leftEvents = a.slice(3);
      if (req.user.role === 'ADMIN') {
        res.render('home', { admin: req.user.role, user: req.user, mainEvent: mainEvents, leftEvent: leftEvents });
      } else {
        res.render('home', { user: req.user, mainEvent: mainEvents, leftEvent: leftEvents });
      }
    })
    .catch((error) => {
      console.log('Error while retrieving events details: ', error);
    });
});

router.get('/ranking', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  res.render('ranking', { user: req.user });
});

router.get('/events/new', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  res.render('createEvent');
});

router.post('/events/new', ensureLogin.ensureLoggedIn(), uploadCloud.single('photo'), (req, res, next) => {
  const { title, category, clan, text, date } = req.body;
  const photo = req.file.url;
  const photoName = req.file.originalname;
  console.log(photo);
  const newEvent = new Events({ title, category, photoName, photo, clan, text, date });  
  newEvent.save()
    .then((event) => {
      res.render('home');
    })
    .catch((error) => {
      console.log(error);
    });
  res.render('createEvent');
});

router.get('/events/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Events.findById({ _id: req.params.id })
    .then((result) => {     
      res.render('event-detail', { user: req.user, event: result });
    })
    .catch((error) => {
      console.log('Error while retrieving event details: ', error);
    });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/sign-in');
});


module.exports = router;
