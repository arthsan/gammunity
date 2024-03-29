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
    return;
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
  Events.find()
    .then((result) => {
      let mainEvents;
      let leftEvents;    
      const a = result.sort((a, b) => b.rate - a.rate);
      mainEvents = a.slice(0, 3);
      leftEvents = a.slice(3);
      if (req.user.role === 'ADMIN') {
        res.render('home', {
          admin: req.user.role, user: req.user, mainEvent: mainEvents, leftEvent: leftEvents,
        });
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
  res.render('createEvent', { user: req.user });
});

router.post('/events/new', ensureLogin.ensureLoggedIn(), uploadCloud.single('photo'), (req, res, next) => {
  const {
    title, category, clan, text, date, address, rate,
  } = req.body;
  const photo = req.file.url;
  const photoName = req.file.originalname;
  const creator = req.user;
  const dateTime = date;
  const newEvent = new Events({
    title, category, photoName, photo, clan, text, rate, date, dateTime, creator, address,
  });
  newEvent.save()
    .then((event) => {      
      res.redirect('/home');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/events/:id/edit', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Events.findById({ _id: req.params.id })
    .then((result) => {
      res.render('editEvent', { user: req.user, event: result });
    })
    .catch((error) => {
      console.log('Error while retrieving event details: ', error);
    });
});

router.post('/events/:id/edit', ensureLogin.ensureLoggedIn(), uploadCloud.single('photo'), (req, res, next) => {
  const {
    title, category, rate, text, date, clan, address,
  } = req.body;
  const photo = req.file.url;
  const photoName = req.file.originalname;
  const dateTime = date;
  // eslint-disable-next-line max-len
  Events.findByIdAndUpdate(req.params.id, {
 $set: {
    title, category, rate, photoName, photo, text, date, dateTime, clan, address,
  } 
})
    .then((result) => {
      console.log(result);
      res.redirect('/home');
    })
    .catch((error) => {
      console.log('Error while retrieving event details: ', error);
    });
});

router.get('/events/:id/delet', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Events.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect('/home');
    })
    .catch((error) => {
      console.log('Error while retrieving event details: ', error);
    });
});

router.get('/events/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Events.findById({ _id: req.params.id })
    .populate('creator')
    .then((result) => {      
      if (req.user.role === 'ADMIN') {
        const options = {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        };
        const dateTime = result.date.toLocaleDateString('en-US', options);
        res.render('event-detail', {
          admin: req.user.role, user: req.user, event: result, date: dateTime,
        });
      } else {
        const options = {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        };
        const dateTime = result.date.toLocaleDateString('en-US', options);
        res.render('event-detail', { user: req.user, event: result, date: dateTime });
      }
    })
    .catch((error) => {
      console.log('Error while retrieving event details: ', error);
    });
},);

router.post('/events/:id/confirmation', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Events.findById({ _id: req.params.id })
  // .populate('users')
    .then((result) => {      
      if (!result.users.includes(req.user._id)) {
        Events.findOneAndUpdate({ _id: req.params.id }, { $push: { users: req.user._id } })
          .then(() => {
            res.render('event-detail', { message: 'You are in this event!', user: req.user, event: result });
            res.redirect('/home');
          })
          .catch(error => console.log(error));
      } else {
        res.render('event-details', { user: req.user, message: 'You are in this event!' });
        res.redirect('/home');
      }
    });
});

router.get('/events/:id/users', ensureLogin.ensureLoggedIn(), (req, res) => {
  Events.findById({ _id: req.params.id })
    .populate('users')
    .then((event) => {      
      res.render('users', { user: req.user, event });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/sign-in');
});


module.exports = router;
