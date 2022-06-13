var express = require('express');
var router = express.Router();
const BL = require('../BL/userBL')

/* GET users listing. */
router.get('/',  async function(req, res, next) {
  let usersData = await BL.getUsers()
  res.render("users", { users : usersData });
});


router.get('/:id',  async function(req, res, next) {
  console.log('req', req.body)
  let id = req.params.id
  let userData = await BL.getUser(id)
  res.render("user", { user : userData });
});

module.exports = router;
