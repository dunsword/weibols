// JavaScript Document

/**
如此回调
fac(3, print(3+3)
fac(2, f1(1+2,print))
fac(1, f2(1){f1(3)})
**/
function fac(n, done){
	if(n==1) done(1);
	else{
		
			console.log("else:" +n);
			fac(n-1,function(val1){ 
				console.log("val1:"+val1);
				val1+=n;
				
				done(val1);
				//process.nextTick(function(){
				//	fac(n-2,done(val1+val2);
				//});
			});
		
	}
}
function pr(n){
	console.log(n);
}

fac(3,pr);
console.log('end');