const express = require('express');
const router  = express.Router();

/* GET event page */
router.get('/event/:id', (req, res, next) => {
  res.render('event-detail');
});

module.exports = router;
