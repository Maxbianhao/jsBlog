/*
 * @Author: bianhao 
 * @Date: 2017-12-12 11:44:32 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-02 18:26:56
 */
const Koa = require('Koa'),
  app = new Koa(),
  session = require('koa-session'),
  adminApiRouter = require('./api/admin').adminApi;

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

// admin接口初始化
app.use(adminApiRouter.routes());
  
app.listen('3000');