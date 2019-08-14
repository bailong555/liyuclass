const fs = require('fs')
const ws =fs.createWriteStream('./01.txt')

ws.on('open',()=>{
	console.log('write stream open')
})
ws.on('close',()=>{
	console.log('write stream close')
})
ws.on('finish',()=>{
	console.log('write stream end')
})

ws.write('hello')
ws.write('good')
ws.end()