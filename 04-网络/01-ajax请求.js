var http = require('http');
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req,res){
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('hello')
});

server.listen(port,hostname,function(){
	console.log('server is running at http://127.0.0.1:3000')
})