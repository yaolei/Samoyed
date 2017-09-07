require('babel-register')({
  presets: ['es2015', 'stage-0', 'react']
});

var path = require('path');
var express = require("express");
var bodyParser = require('body-parser');
var compression = require('compression');
var logger = require('morgan'); //日志模块
var async = require('async'); //异步请求
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig'); // 视图引擎
var proxy = require('http-proxy-middleware');
//require('xml2js') xml 和json 互相转换
//require('fs') 文件读写操作
var cfenv = require("cfenv");
var app = express();

module.exports = {
     entry:{
        app:["./app/main.js"]
     },

     output: {
         path: __dirname,
         filename: './server.js',
     },
     devServer: {
         inline: true,
         port: 8000
     },

     module: {
         loaders: [
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                 presets: ['es2015', 'stage-0', 'react']
             }
         }]
     }
 };

app.use(compression());  // 压缩gzip包
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));

// app.listen(port, function() {
//     console.log("To view your app, open this link in your browser: http://localhost:" + port);
// });


