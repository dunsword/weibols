// JavaScript Document
var http = require('http');
var url = require('url');
var util = require('util');
var querystring=require('querystring');
var httpUtils=require('./httpUtils');


var urlArg=process.argv[2];
var parsedUrl=url.parse(urlArg);
var opts={
	host: parsedUrl.hostname,
	port: 80,
	path: parsedUrl.pathname,
	};
console.log(opts);
var cookies=new httpUtils.cookies();
var form={};

var req=http.request(opts,function(res){
			res.setEncoding("UTF-8");
			var body="";
			res.on('data',function(chunk){
					body+=chunk;
								   });
			res.on('end',function(){
					util.log("BODY:");
					var lform=paserLoginPage(body);
					login(lform);
			});
			util.log('STATUS: ' + res.statusCode);
			util.log('HEADERS: ' + util.inspect(res.headers));
			var setCookies=res.headers['set-cookie'];
			cookies.setCookies(setCookies);
			util.log('COOKIES: '+ cookies.cookieString());
});
req.end();
util.log('request end');
function paserLoginPage(html){
	//util.log(html);
	var lform={};
	var pos=html.search(/<input type="hidden" name="refererUrl" value="/);
	
	if(pos>0) {
		lform['refererUrl']=html.substring(pos+46,pos+46+29);
		lform['userName']='dunsword';
		lform['password']='pass123';
		lform['remember']='0';
	}
	return lform;
	
	
}

function login(lform){
	var rUrl=querystring.escape(lform['refererUrl']);
	var data='refererUrl='+rUrl+'&checked=0&userName=dunsword&userPass=pass123&captcha=&cityInfo=&remember=0';
	util.log("DATA: "+data);

	var lopts={
	host: parsedUrl.hostname,
	port: 80,
	path: parsedUrl.pathname,
	method: 'POST',
	headers: {
		'Cookie': cookies.cookieString(),
		'Referer' :	'http://www.19lou.com/login',
		'User-Agent':	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0',
		'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length
		}
	};
	
	
	var postReq=http.request(lopts,function(res){
		res.setEncoding('gb2312');
      	res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      	});
		res.on('end',function(){
		  util.log("login end...");
		});
		
		util.log('STATUS: ' + res.statusCode);
		util.log('HEADERS: ' + util.inspect(res.headers));
		var setCookies=res.headers['set-cookie'];
		cookies.setCookies(setCookies);
		util.log('COOKIES: '+cookies.cookieString());
	});
	postReq.write(data);
	postReq.end();
}