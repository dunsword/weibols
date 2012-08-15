var mongoose=require('mongoose');
var cookies=require('./cookies');


function setup(){
	console.log('this is test');
	var dbUrl='mongodb://localhost/weibols';
	mongoose.connect(dbUrl);
}

function clean(){
	mongoose.disconnect();
	console.log('clean up');
}

function testSaveCookies(callback){
	console.log('test save cookies');

	var cookieString='uname=Paul;Domain=19lou.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/';
	cookies.saveCookie(cookieString,function(result,message){
	if(result){
		console.log(message);
		console.log("result: "+result);
	}else{
		console.log(message);
	}
	callback();
});

}

function testGetCookies(callback){
	console.log('test get cookies');
	callback();
}

function testCleanCookies(callback){
	console.log('test clean cookies');
	callback();
}

var tests=[testSaveCookies,testGetCookies,testCleanCookies];

exports.tests=tests;
exports.setup=setup;
exports.clean=clean;