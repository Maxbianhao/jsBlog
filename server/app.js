/*
 * @Author: bianhao 
 * @Date: 2017-12-12 11:44:32 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-12 18:21:01
 */
var express = require('express'),
  session = require('express-session'),
  app = express(),
  adminsApi = require('./api/admins').adminsApi;

// 开启session
app.use(session({
  secret: 'secret',
  cookie: {
    maxAge: 1000 * 60 * 30
  }
}));

// 请求过滤
app.use((req, res, next) => {
  if(req.session.admin) {
    next();
  } else {
    let url = req.url;
    // 没登录只能访问登录接口
    if(/adminLogin/.test(url)) {
      next();
    } else {
      res.send({'code': -4});
    }
  }
})

// admins接口初始化
app.use('/admins', adminsApi);

app.listen('80');