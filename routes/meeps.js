/* GET form for updating a meep  */
router.get('/update/:id',
  param('id').isInt(),
  verify,
  async (req, res, next) => {
    const sql = 'SELECT meeps.*, users.name FROM meeps JOIN users ON meeps.user_id = users.id WHERE meeps.id = ?';
    result = await query(sql, req.params.id);
    res.render('meepsform', { meep: result[0] });
});