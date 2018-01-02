/*
 * @Author: bianhao 
 * @Date: 2018-01-02 14:29:58 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-02 18:42:39
 */
const db = require('../db'),
  mongoose = db.mongoose,
  Schema = mongoose.Schema;

const projectSchema = new Schema({
  // 主键
  _id: Schema.Types.ObjectId,
  // 创建时间
  createTime: {type: Date, default: Date.now},
  // 项目分类id，外键
  kindId: {type: Schema.Types.ObjectId, ref: 'projectKind'},
  // 显示顺序
  showOrder: Number,
  // 缩略图大小尺寸,1为大，2为小
  showSize: Number,
  // 是否精选
  isChoise: {type: Boolean, default: false},
  // 是否显示
  isShow: {type: Boolean, default: true},
  // 是否删除
  isDel: {type: Boolean, default: false},
  // 项目名称
  projectName: String,
  // 英文名称
  projectNameInEn: String,
  // 项目描述
  projectDes: String,
  // 缩略图
  thumbnail: String,
  // 参与者
  member: String,
  // 标签
  projectTag: String,
  // 地址
  address: String,
  // 项目内容，外键
  attachId: String
});

exports.projectModel = mongoose.model('project', projectSchema);