/*
 * @Author: bianhao 
 * @Date: 2017-12-12 11:36:25 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-12 19:02:21
 */
var express = require('express'),
  session = require('express-session'),
  router = express.Router(),
  admins = require('../controllers/admins');

// 创建admin
router.get('/createAdmin', (req, res) => {
  let account = req.query.account,
    password = req.query.password,
    power = req.query.power;
  admins.createAdmin({
    'account': account,
    'password': password,
    'power': power
  }, resp => {
    res.send(resp);
  })
});

// 返回所有的admin列表
router.get('/adminsList', (req, res) => {
  admins.findAdmins(resp => {
    res.send(resp);
  })
});

// 删除指定admin
router.get('/delAdmin', (req, res) => {
  let _id = req.query._id;
  admins.delAdmin({
    _id: _id,
    nowAdminId: req.session.admin._id
  }, resp => {
    res.send(resp);
  })
});

// admin 登录
router.get('/adminLogin', (req, res) => {
  let account = req.query.account,
    password = req.query.password;
  admins.adminLogin({
    account: account,
    password: password
  }, (resp, admin) => {
    // 登录成功设置session
    if(resp.code === 1) {
      req.session.admin = admin;
    }
    res.send(resp);
  })
});

// admin注销
router.get('/adminLogout', (req, res) => {
  req.session.admin = null;
  res.redirect('/');
})

exports.adminsApi = router;