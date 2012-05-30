var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var dbUrl='mongodb://localhost/weibols';

connect=function(callback){
	mongoose.connect(dbUrl);
	callback();
}
disconnect=function(callback){
	mongoose.disconnect(callback);
}

NoteSchema=new Schema({
	ts : {type:Date, default: Date.now},
	author: String,
	note: String
});
mongoose.model('Note',NoteSchema);


var conn=mongoose.createConnection(function(){
	var Note=conn.model('Note');
	console.log('note:'+Note);
	var nn=new Note();
	nn.author='Paul';
	nn.note='Good Book';
	
	console.log('to save');
	
	nn.save();
	
	conn.disconnect(function(){
	 	console.log('disconnected');
	 });

	/**
	nn.save(function(err){
	if(err)
	 	console.log('err: '+err);
	 else
	 	console.log('saved');
	 	
	 disconnect(function(){
	 	console.log('disconnected');
	 });
});*/
});