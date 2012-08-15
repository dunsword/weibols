var mongoose=require('mongoose');
var cookies=require('./cookies');
var jsunit=require('./jsunit').jsunit;
var test=new jsunit();

test.setup=function(callback){
	console.log('setup...');
	var dbUrl='mongodb://localhost/weibols';
	mongoose.connect(dbUrl);
	callback();
}

test.clean=function(){
	mongoose.disconnect();
	console.log('clean up');
}

test.testSaveCookies=function(callback){
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
	});

}


test.testGetCookies=function(callback){
	console.log('test get cookies');
	callback();
}

test.testCleanCookies=function(callback){
	console.log('test clean cookies');
	callback();
}

test.dd=function(dd){}

//var tests=[setup,testSaveCookies,testGetCookies,testCleanCookies,clean];
//test.runtest(tests);
test.run();

