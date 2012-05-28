var login=require('./login');
var util = require('util');

function callback(result,cookies){
	util.log("Login Result:"+result);
	//util.log("Cookies:"+ util.inspect(cookies));
}

login.login("dunsword","123456",callback);
util.log('end');