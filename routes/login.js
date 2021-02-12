const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { query } = require('../models/db');

/* GET login form */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  res.render('login', {title: 'Chili`s 🌶🌶🌶'});
});

router.get('/kryptan/:pwd', function (req, res, next) {

  const myPlaintextPassword = req.params.pwd;

  bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
    // Store hash in your password DB.
    res.json({
      pwd: hash
    });
  });
});

/* POST login */
router.post('/', function (req, res, next) {

  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;

  if (password == "bananpurre") {
    req.session.loggedin = true;
    req.session.username = username;
    res.redirect('/heemligt');

  
  } else {
    res.render(
      'login', {
        title: 'Chili`s 🌶🌶🌶',
        error: 'FEL BITCH!'
      }
    );
  }

});

module.exports = router;