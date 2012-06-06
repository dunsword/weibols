var mongo=require('./mongoConnection');
var util=require('util');

var conn=mongo.getConnection();

var Note=conn.model('Note');
var anote=new Note();
anote.author="Paul";
anote.note='Hello!';
anote.title='Note1';


anote.save(function(err){
	if(err){
		console.log('error');
	}
	else {
		console.log('saved');
	}
});

Note.find({},function(err,docs){
	util.log(util.inspect(docs));
	conn.close(function(){
		mongo.close();
	});
	
});
