var am=require('./mtest');
var bm=require('./mtest');
var ModelClass=new require('./mtest').Model;
var util=require('util')


var cm=new ModelClass();


console.log("Amodel.name="+am.amodel.modelname);
console.log("Cmodel.name="+util.inspect(cm));
am.amodel.modelname='a2';
var t3=require('./t3');
console.log("Bmodel.name="+bm.amodel.modelname);
console.log("Cmodel.name="+cm.modelname);
t3.printam();