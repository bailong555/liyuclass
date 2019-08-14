const http = require('http')
const fs = require('fs')
const path = require('path')
const mime = require('./mime.json')


const server = http.createServer((req,res)=>{
	console.log(req.url)
	const filePath = path.normalize(__dirname+''+req.url)
	fs.readFile(filePath,(err,data)=>{
		if(err){
			res.setHeader('Content-type','text/html;charset=utf-8')
			res.statusCode = 404
			res.end('<h1>请求出错了</h1>')
		}else{
			const extname = path.extname(filePath)
			const mimeType = mime[extname] || 'text/plain'
			res.setHeader('Content-type',mimeType+'charset=utf-8')
			res.end(data)
		}
	})
})	


server.listen(3000,'127.0.0.1'()=>{
	console.log('server is running on http://127.0.0.1:3000')
})





