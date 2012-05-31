console.log('t3 is loaded...');
var am=require('./mtest');
console.log('loaded mtest in t3');

function printam(){
	console.log("in t3 am="+am.amodel.modelname);
}
exports.printam=printam;