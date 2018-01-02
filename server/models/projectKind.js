/*
 * @Author: bianhao 
 * @Date: 2018-01-02 14:37:29 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-02 18:42:40
 */
const db = require('../db'),
  mongoose = db.mongoose,
  Schema = mongoose.Schema;

const projectKindSchema = new Schema({
  // 主键
  _id: Schema.Types.ObjectId,
  // 是否显示在主页, true为显示，反之不显示
  isIndexShow: {type: Boolean, default: true},
  // 分类名称
  kindName: String
});

exports.projectKindModel = mongoose.model('projectKind', projectKindSchema);