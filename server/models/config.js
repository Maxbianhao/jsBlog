/*
 * @Author: bianhao 
 * @Date: 2018-01-02 17:44:39 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-02 17:51:52
 */
const db = require('../db'),
  mongoose = db.mongoose,
  Schema = mongoose.Schema;

const configSchema = new Schema({
  // 推荐条目，支持4，8，12
  recommendSum: Number,
  // 团队介绍
  teamIntroduce: String,
  // 微博
  weibo: String,
  // 微信，缩略图地址
  wechat: String,
  // behance主页地址
  behance: String,
  // 站酷地址
  zcool: String
});

exports.configModal = mongoose.model('config', configSchema);