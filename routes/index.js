var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/heemligt', function(req, res, next) {
  if (req.session.loggedin) {
    res.send('SNYGGT JOBBAT BITCH DU ÄR INNE!');
  }else{
      res.send('LOGGA IN BITCH!');
  }
});

module.exports = router;
