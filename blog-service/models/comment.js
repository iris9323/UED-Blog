var mongoose = require('mongoose');
var blog = require('./db.js');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  commentName: {
    type: String  //评论人
  },
  commenId: {
    type: String  //评论人id
  },
  blogId: {
    type: String  //文章id
  },
	likeNum: {
		type: Number,  //点赞数
		default: 0
  },
  content: {
    type: String  //内容
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

module.exports = blog.model('Comment', CommentSchema);