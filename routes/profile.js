const express = require('express');

const router = express.Router();
const Users = require('../models/User.js');

router.get('/edit', (req, res, next) => {
  res.render('profile-edit');
});

router.get('/:id', (req, res, next) => {
  Users.findById({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.render('profile', { name: result });
    });
});




module.exports = router;
