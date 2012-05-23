// a connect example
var connect=require('connect');

connect.createServer()
	.use(connect.favicon())
	.use(connect.logger())
	.use(connect.router(myRouter)).listen(8080);
console.log('connect started at port 8080');

function myRouter(app){
	app.get('/',index);
}

var request=function index(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
}
request.end(function(){
	console.log('request end');
})