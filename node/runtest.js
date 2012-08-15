// 先执行setup，然后依次通过回调执行测试，最后调用clean
if(process.argv.length<3){
	console.log("please input test file name!");
	process.exit();
}

var target=require('./'+process.argv[2]);

console.log("startting test ...");

var tests=target.tests;
console.log("total "+tests.length+" methods to test.");

console.log('setup...');
target.setup();


var i=0;

//获取方法名称
function getFunctionName(func){
	return func.match(/function\s*([^(]*)\(/)[1];
}

//调用下一个测试方法
function testCaller(){
	if(i<tests.length) {
		console.log('-----------------------------------------------');//换行
		console.log('calling next test method: '+getFunctionName(tests[i].toString())+' ...');
		tests[i++](testCaller);
	}else{
		target.clean();
	}
}
testCaller();


/*
while(i<2){
	tests[i](function(){
		console.log("function executed! calling next..."+i);
		console.log("");
		tests[i](function(){
			console.log("function executed! calling next..."+i);
			console.log("");
			tests[++i](;
		});
	}
	else{
		console.log("function executed! calling clean..."+i);
		console.log("");
		tests[i](target.clean);
	}
}
);
*/