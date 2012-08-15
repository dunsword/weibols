// 先执行setup，然后依次通过回调执行测试，最后调用clean

var testCookies=require('./testCookies');

testCookies.setup();
var tests=testCookies.tests;
var i=1;
tests[0](function(){	
	if(i<tests.length-1){
		test[i](test[++i]);
	}
	else{
		tests[i](testCookies.clean);
	}
}
);