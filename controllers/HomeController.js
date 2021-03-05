const bcrypt = require('bcrypt');
const { query } = require('../models/db.model');
const { body, validationResult } = require('express-validator');

module.exports.show = async function(req, res, next) {
    res.render('home', {
      username: req.session.username
    });
}

module.exports.store = async function(req, res, next) {
  if (req.session.loggedin) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render('home',{ errors: errors.array() });
      }
    //edit user
      const sql = 'UPDATE users SET name = ? WHERE id = ?';
      const result = await query(sql, [req.body.newname. req.session.userid]);
      if (result.changedRows == 1) {
        req.session.username = req.body.newusername;
        return res.render('home', {
          username: req.session.username
        });
      } else {
        return res.status(400).render('home',{errors: errors.array() });
      }
    } else {
      return res.redirect('/login');
    }
};

