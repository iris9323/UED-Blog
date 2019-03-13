var mongoose = require('mongoose');
var blog = require('./db.js');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	nickName: {
		type: String  //昵称
	},
	account: {
		type: String  //账号
	},
	passWord: {
		type: String  //密码
	},
	authorization: {
		type: Number,  //权限  暂时默认1
		default: 1
	},
	avatar: {
		type: String  //头像
	},
	updateAt: {
		type: Date,
		default: Date.parse(new Date())   //更新时间
	},
	createAt: {
		type: Date,
		default: Date.parse(new Date())   //创建时间
	},
});

module.exports = blog.model('User', UserSchema);