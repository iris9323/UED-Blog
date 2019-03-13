var User = require("../models/user.js");   //引入user表
const logger = require('../log');   //引入日志

exports.login = function (req, res, url) {
  console.log(logger)
  logger.info('123')
  logger.error('123')
}