// a connect example
var connect=require('connect');
var dispatch=require('dispatch');

var myRouter=dispatch(
	{
	   '/':index,
	   '/*':other
	}
);

connect.createServer(myRouter)
	.use(connect.favicon())
	.use(connect.logger())
	.listen(8080);
console.log('connect started at port 8080');

function myRouter(app){
	app.get('GET /',index);
}

function index(req,res,next){
	req.on('end',function(){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('hello1');
						  });
}
function other(req,res,next){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('undefine');
}

