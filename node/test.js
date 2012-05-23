// JavaScript Document
var querystring=require('querystring');
var test='=';
console.log(querystring.escape(test));

var bbsthread=require('./bbsthread');
console.log(new bbsthread.bbsthread().getFormString());