// JavaScript Document
function pr(done){
	done(1);
}
function done(val){
	console.log(val);
}
pr(done);