var mongoose=require('mongoose');
var cookies=require('./cookies');
<<<<<<< HEAD
var jsunit=require('./jsunit').jsunit;
var test=new jsunit();

test.setup=function(callback){
	console.log('setup...');
	var dbUrl='mongodb://localhost/weibols';
	mongoose.connect(dbUrl);
	callback();
}

test.clean=function(){
=======


function setup(){
	console.log('this is test');
	var dbUrl='mongodb://localhost/weibols';
	mongoose.connect(dbUrl);
}

function clean(){
>>>>>>> c9abaa22cac1c39a5adcaabb8f02b0fba050664d
	mongoose.disconnect();
	console.log('clean up');
}

<<<<<<< HEAD
test.testSaveCookies=function(callback){
=======
function testSaveCookies(callback){
>>>>>>> c9abaa22cac1c39a5adcaabb8f02b0fba050664d
	console.log('test save cookies');

	var cookieString='uname=Paul;Domain=19lou.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/';
	cookies.saveCookie(cookieString,function(result,message){
	if(result){
		console.log(message);
		console.log("result: "+result);
	}else{
		test.assert(false,message);
	}
	callback();
<<<<<<< HEAD
	});

}


test.testGetCookies=function(callback){
=======
});

}

function testGetCookies(callback){
>>>>>>> c9abaa22cac1c39a5adcaabb8f02b0fba050664d
	console.log('test get cookies');
	callback();
}

<<<<<<< HEAD
test.testCleanCookies=function(callback){
=======
function testCleanCookies(callback){
>>>>>>> c9abaa22cac1c39a5adcaabb8f02b0fba050664d
	console.log('test clean cookies');
	callback();
}

<<<<<<< HEAD
test.dd=function(dd){}

//var tests=[setup,testSaveCookies,testGetCookies,testCleanCookies,clean];
//test.runtest(tests);
test.run();

=======
var tests=[testSaveCookies,testGetCookies,testCleanCookies];

exports.tests=tests;
exports.setup=setup;
exports.clean=clean;
>>>>>>> c9abaa22cac1c39a5adcaabb8f02b0fba050664d
