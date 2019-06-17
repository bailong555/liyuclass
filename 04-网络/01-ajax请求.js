var http = require('http');
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 3001;

var server = http.createServer(function(req,res){
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('hello everybody')
});

server.listen(port,hostname,function(){
	console.log('server is running at http://127.0.0.1:3001')
})