// JavaScript Document
var querystring=require('querystring');
var test='中文';
console.log(querystring.escape(test));

var bbsthread=require('./bbsthread');
console.log(new bbsthread.bbsthread().getFormString());