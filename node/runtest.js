// 先执行setup，然后依次通过回调执行测试，最后调用clean
if(process.argv.length<3){
	console.log("please input test file name!");
	process.exit();
}

var target=require('./'+process.argv[2]);
var tests=target.tests;

console.log("Number of functions to test: "+tests.length);

target.setup();

var i=0;



t=function(){
	tests[i](
	
	if(i<tests.length)	t();
};
t();



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