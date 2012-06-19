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
	note: String,
	title:String
});
mongoose.model('Note',NoteSchema);


mongoose.connect(dbUrl);
console.log("connect successfully!")


exports.getConnection=function(){
	return mongoose.createConnection(dbUrl);
}
exports.close=disconnect;
