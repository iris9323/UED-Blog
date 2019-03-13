var mongoose = require('mongoose');
var blog = require('./db.js');
var Schema = mongoose.Schema;

var BlogTypeSchema = new Schema({
	title: {
		type: String  //分类名称
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

module.exports = blog.model('BlogType', BlogTypeSchema);