/*
 * @Author: bianhao 
 * @Date: 2017-12-06 16:54:36 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-12 19:05:57
 */
var adminsModel = require('../models/admins').adminsModel;
var db = require('../db'),
  mongoose = db.mongoose;

/**
 * 创建admin
 * 
 * @param {any} params admin属性
 * @param {any} callback 回调
 */
exports.createAdmin = (params, callback) => {
  let admin = new adminsModel({
    _id: mongoose.Types.ObjectId(),
    createTime: new Date(),
    account: params.account,
    password: params.password,
    power: params.power
  });
  // 查重
  adminsModel.findOne({
    'account': params.account
  }, (err, doc) => {
    if(err) {
      return callback(err);
    } else if(doc) {
      // 用户名已存在 
      return callback({'code': -1})
    } else {
      admin.save(err => {
        if(err) {
          return callback(err);
        }
        // 创建成功
        return callback({code: 1});
      })
    }
  })
}
/**
 * 查询admins列表
 * 
 * @param {any} params 查询参数
 * @param {any} callback 回调
 */
exports.findAdmins = (params, callback) => {
  if('function' == typeof params) {
    callback = params;
    params = {};
  }
  adminsModel.find(params,{},{},(err, docs) => {
    if(err) {
      return callback(err);
    }
    return callback(docs);
  })
}
/**
 * 删除admin
 * 
 * @param {Object} params _id：删除admin的id，nowAdminId：当前用户id
 * @param {any} callback 
 */
exports.delAdmin = (params, callback) => {
  let _id = params._id,
    nowAdminId = params.nowAdminId;
  // 先查询要删除admin的权限，高于当前用户不能删除
  adminsModel.findById({_id: _id}, (err, doc) => {
    if(err) {
      return callback(err);
    } else if(!doc) {
      // 管理员_id不存在
      return callback({'code': -1});
    }
    // 权限不足
    if(params.nowAdminId >= doc.power) {
      return callback({'code': -2})
    }
    adminsModel.remove({_id: _id}, (err, doc) => {
      if(err) {
        return callback(err);
      }
      // 删除成功
      return callback({'code': 1});
    })
  })
}
/**
 * admin登录
 * 
 * @param {any} params 用户名，密码
 * @param {any} callback 
 */
exports.adminLogin = (params, callback) => {
  let account = params.account,
    password = params.password;
  adminsModel.findOne({account: account}, (err, doc) => {
    if(err) {
      return callback(err);
    } else if(!doc) {
      // 账号不存在
      return callback({'code': -2});
    } else {
      // 密码不正确 
      if(password !== doc.password) {
        return callback({'code': -1});
      }
      // 验证通过
      return callback({'code': 1}, doc);
    }
  })
}
