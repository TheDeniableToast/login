var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/Authcontroller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chiligangs officiella hemsida!', username: req.session.username });
});

router.post('/logout', AuthController.destroy);

module.exports = router;