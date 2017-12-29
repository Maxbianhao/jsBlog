/*
 * @Author: bianhao 
 * @Date: 2017-12-05 16:57:11 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-29 10:26:15
 */
var mongoose = require('mongoose'),
  dbPath = require('./config/db-config').dbPath;

mongoose.connection.openUri(dbPath);
var db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.on('connected', () => {
  console.log('mongoDB连接成功!');
});

exports.mongoose = mongoose;
