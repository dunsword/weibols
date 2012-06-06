var mongoose=require('mongoose');
var cookies=require('./cookies');
var dbUrl='mongodb://localhost/weibols';

mongoose.connect(dbUrl);

var cookieString='uname=Paul;Domain=.19lou.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/';
cookies.saveCookie(cookieString,function(result,message){
	if(result){
		console.log(message);
	}else{
		console.log(message);
	}
	mongoose.disconnect();
});
