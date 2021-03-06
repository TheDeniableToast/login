const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const AuthController = require('../controllers/Authcontroller');

/* GET login form */
router.get('/', AuthController.show);

/* POST login */
router.post('/',
  body('username').notEmpty().trim().toLowerCase(),
  body('password').notEmpty(),
  body('rememberme').toBoolean(),
  AuthController.store
);


module.exports = router;

    /*
    "value": "",
    "msg": "Invalid value",
    "param": "username",
    "location": "body"
    */