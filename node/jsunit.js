//获取方法名称


//参数是测试方法的数组
function jsunit(){
	

	
	
	
	this.runtest=function(testo){
	var tests=Object.keys(testo);
	console.log("startting test ...");
	console.log("total "+tests.length+" methods to run.");
	var i=0;	
	
	//调用下一个测试方法
	function testCaller(){
		if(i<tests.length) {
			console.log('-----------------------------------------------');//换行
			console.log('calling test '+i+ ' '+ ': '+tests[i]);//(tests[i].toString()).match(/function\s*([^(]*)\(/)[1]+' ...');
			testo[tests[i++]](testCaller);
		}else{
			console.log('-----------------------------------------------');
			console.log('all test finished!');
			return;
		}
	}
	
	testCaller();
	}

	this.clean=function(){};
	this.dummy=function(){};
	this.msg='msg hell';
	this.run=function(){
		//this.setup(this.dummy);
		//this.testSaveCookies(this.clean);
		var methods=Object.getOwnPropertyNames(this);
		var tests=new Array();
		tests['setup']=this.setup;
		var n=1;
		for(var i=0;i<methods.length;i++){
			if(methods[i].substring(0,4)=='test'){
				tests[methods[i]]=this[methods[i]];
			}
		}
		tests['clean']=this.clean;
		this.runtest(tests);
	}
}
jsunit.prototype.setup=function(callback){
	callback();
};
jsunit.prototype.clean=function(){
};
jsunit.prototype.assert=function(flag,message){
	if(!flag){
		console.log("Assert faild: "+message);
		process.exit();
	}
}


function assertEquals(arg1,arg2,errorMessage){
	if(arg1===arg2){
		//passed
	}
	else{
		console.log( "Test failed, expect "+arg1+" but "+arg2);
		console.log("Message: "+errorMessage);
	}
	process.exit();
}

function assert(result,errorMessage){
	console.log( "Test failed!")
	console.log("Message: "+errorMessage);
	process.exit();
}

exports.jsunit=jsunit;
exports.assert=assert;
exports.assertEquals=assertEquals;

