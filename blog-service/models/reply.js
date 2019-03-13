var mongoose = require('mongoose');
var blog = require('./db.js');
var Schema = mongoose.Schema;

var ReplySchema = new Schema({
  replyName: {
    type: String  //回复人
  },
  replyId: {
    type: String  //回复人objectId
  },
  reReplyName: {
    type: String  //被回复人
  },
  reReplyId: {
    type: String  //被回复人objectId
  },
  blogId: {
    type: String  //文章objectId
  },
  commentId: {
    type: String  //评论objectId
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

module.exports = blog.model('Reply', ReplySchema);