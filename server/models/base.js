/*
 * @Author: bianhao 
 * @Date: 2017-12-06 15:58:59 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-06 17:24:41
 */

var mongoose = require('mongoose'),
  base = require('mongoose-schema-extend'),
  Schema = mongoose.Schema;

// base Schema
var base = new mongoose.Schema({
   // 主键
   _id: Schema.Types.ObjectId,
   // 创建时间
   createTime: {type: Date, default: Date.now},
   // 修改时间
   updateTime: {type: Date, default: Date.now}
});

exports.base = base;