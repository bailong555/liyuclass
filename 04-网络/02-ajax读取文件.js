var http = require('http');

var server = http.ceratrServer(function(req,res){
	res.end('hello')
})