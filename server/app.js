/*
 * @Author: bianhao 
 * @Date: 2017-12-12 11:44:32 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-28 15:06:02
 */
const Koa = require('Koa'),
  app = new Koa(),
  session = require('koa-session'),
  adminsApiRouter = require('./api/admins').adminsApi;

// session config
const sessionConfig = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: false,
  rolling: false
}

app.use(session(sessionConfig, app));

// 请求过滤
app.use((ctx, next) => {
  if(ctx.session.admin) {
    next();
  } else {
    let url = ctx.url;
    // 没登录只能访问登录接口
    if(/adminLogin/.test(url)) {
      next();
    } else {
      ctx.body = {'code': -4};
    }
  }
})

// admins接口初始化
app.use(adminsApiRouter.routes());
  
app.listen('3000');