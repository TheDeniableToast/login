const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const {query} = require('../models/db.model')
const {verify} = require('../middlewares/verify');
const Homecontroller = require('../controllers/HomeController');

/* GET topsekret page. */
router.get('/', Homecontroller.show);

router.get('/edit', (req, res, next) => {
  res.render('useredit')
});

router.post('/edit',
  body('newusername').notEmpty().trim(),
  Homecontroller.store
);

module.exports = router;