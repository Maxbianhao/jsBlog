/*
 * @Author: bianhao 
 * @Date: 2017-12-12 11:36:25 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-28 14:21:53
 */
const Router = require('koa-router'),
  admins = require('../controllers/admins');

const router = new Router({
  prefix: '/admins'
});

// 创建admin
router.get('/createAdmin', async (ctx, next) => {
  let account = ctx.query.account,
    password = ctx.query.password,
    power = ctx.query.power;
  
  // 查询用户名是否重复
  let admin = await admins.findAdminByAccount({account: ctx.query.account});
  // 当前用户名不存在可以创建
  if(admin.code === -1) {
    let createAdmin = await admins.createAdmin({
      'account': account,
      'password': password,
      'power': power
    });
    ctx.body = createAdmin;
  } else {
    // 用户已存在
    ctx.body = {'code': -1}
  }
});

// 返回所有的admin列表
router.get('/adminsList', async (ctx, next) => {
  let adminsList = await admins.findAdmins();
  ctx.body = adminsList;
});

// 删除指定admin
router.get('/delAdmin', async (ctx, next) => {
  let _id = ctx.query._id;
  // 判断当前登录admin的权限
  let nowAdmin = await admins.findAdminById({id: ctx.session.admin._id});
  if(nowAdmin.power !== 1) {
    // 权限不足
    ctx.body = {'code': -1};
  } else {
    let removeDrag = await admins.delAdmin({_id: _id});
    ctx.body = removeDrag;
  }
});

// admin 登录
router.get('/adminLogin', async (ctx, next) => {
  let account = ctx.query.account,
    password = ctx.query.password;

  let loginRes = await admins.adminLogin({
    account: account,
    password: password
  });
  
  // 登录成功设置session
  if(loginRes.code === 1) {
    ctx.session.admin = loginRes.admin;
  }
  ctx.body = loginRes;
});

// admin注销
router.get('/adminLogout', (ctx, next) => {
  ctx.session.admin = null;
  ctx.redirect('/');
})

exports.adminsApi = router;