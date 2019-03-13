var express = require('express');
var router = express.Router();
var user = require('../controller/user');

/* GET users listing. */
router.get('/login', function (req, res, next) {
  //解决跨域
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);

  //调用controller方法
  user.login(req, res);
});

module.exports = router;
