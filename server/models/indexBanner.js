/*
 * @Author: bianhao 
 * @Date: 2018-01-02 18:43:47 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-02 18:51:01
 */
const db = require('../db'),
  mongoose = db.mongoose,
  Schema = mongoose.Schema;

const indexBannerSchema = ({
  _id: Schema.Types.ObjectId,
  // banner图片地址
  imgSrc: String,
  // 上传时间
  uploadTime: {type: Date, default: Date.now},
  // 图片描述
  imgDes: String
});

exports.indexBannerModel = mongoose.model('indexBanner', indexBannerSchema);