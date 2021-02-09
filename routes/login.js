var express = require('express');
var router = express.Router();

/* GET login form */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('login', {title: 'bannanklubens heem sidda 👌👌👌👌👌👌'})
});

/* POST login */
router.post('/', function(req, res, next) {

  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;

  if (password == "bananpurre") {
    res.send('Välkommen till Bananklubben grabben/grabbinnan 🍌🍌🍌🍌👌👌😘😘👍👍💋💋');
  } else {
    res.render(
      'login',
      {
        title: 'bannanklubens heem sidda 👌👌👌👌👌👌',
        error: 'FEL BITCH!'
      }
    );
  }

});

module.exports = router;
