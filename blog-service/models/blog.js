var mongoose = require('mongoose');
var blog = require('./db.js');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
	title: {
		type: String  //文章名称
	},
	blogType: {
		type: Number  //文章类别objectId
	},
	info: {
		type: String  //文章简介
	},
	content: {
		type: String,  //文章内容
	},
	isGood: {
		type: Number  //是否精选 1是2不是
	},
	author: {
		type: String  //作者  登录用户昵称
	},
	userId: {
		type: String  //作者objectId  登录用户objectId
	},
	likeNum: {
		type: Number,  //点赞数
		default: 0
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

module.exports = blog.model('Blog', BlogSchema);