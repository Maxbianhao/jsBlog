/*
 * @Author: bianhao 
 * @Date: 2017-12-06 16:54:36 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-28 14:20:51
 */
var adminsModel = require('../models/admins').adminsModel;
var db = require('../db'),
  mongoose = db.mongoose;

/**
 * 创建admin
 * 
 * @param {Object} params admin属性
 */
exports.createAdmin = (params) => {
  let admin = new adminsModel({
    _id: mongoose.Types.ObjectId(),
    createTime: new Date(),
    account: params.account,
    password: params.password,
    power: params.power
  })
  return new Promise((resolve, reject) => {
    admin.save(err => {
      if(err) reject(err);
      // 创建成功
      resolve({'code': 1})
    });
  })
}
/**
 * 通过账号查询admin
 * 
 * @param {Object} params admin：账号
 */
exports.findAdminByAccount = params => {
  return new Promise((resolve, reject) => {
    adminsModel.findOne({
      'account': params.account
    }, (err, doc) => {
      if(err) {
        reject(err);
      } else if(doc) {
        // 查询成功
        resolve({'code': 1, 'admin': doc});
      } else {
        // 查询结果为空
        resolve({'code': -1});
      }
    })
  })
}
/**
 * 通过id查询admin
 * 
 * @param {Object} params id：admin id
 */
exports.findAdminById = params => {
  return new Promise((resolve, reject) => {
    adminsModel.findById({_id: params.id}, (err, doc) => {
      if(err) reject(err);
      resolve(doc);
    })
  })
}
/**
 * 查询admins列表
 * 
 * @param {Object} params 查询参数
 */
exports.findAdmins = params => {
  params = params || {};
  return new Promise((resolve, reject) => {
    adminsModel.find(params,{},{},(err, docs) => {
      if(err) reject(err);
      resolve(docs);
    })
  })
}
/**
 * 删除admin
 * 
 * @param {Object} params _id：删除admin的id
 */
exports.delAdmin = (params) => {
  let _id = params._id;
  return new Promise((resolve, reject) => {
    adminsModel.remove({_id: _id}, (err, doc) => {
      if(err) reject(err);
      // 删除成功
      resolve({'code': 1});
    })
  })
}
/**
 * admin登录
 * 
 * @param {Object} params 用户名，密码
 */
exports.adminLogin = (params) => {
  let account = params.account,
    password = params.password;

  return new Promise((resolve, reject) => {
    adminsModel.findOne({account: account}, (err, doc) => {
      if(err) {
        reject(err);
      } else if(!doc) {
        // 账号不存在
        resolve({'code': -2});
      } else {
        // 密码不正确 
        if(password !== doc.password) {
          resolve({'code': -1});
        }
        // 验证通过
        resolve({'code': 1, 'admin': doc});
      }
    })
  });
}
