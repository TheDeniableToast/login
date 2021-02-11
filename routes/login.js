var express = require('express');
var router = express.Router();

/* GET login form */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  res.render('login', {
    title: 'Välkommen till Chili`s 🌶🌶🌶'
  })
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
        title: 'Välkommen till Chili`s 🌶🌶🌶',
        error: 'FEL BITCH!'
      }
    );
  }

});

module.exports = router;