const fs = require('fs')
const ws =fs.createWriteStream('./01.mov')

ws.on('open',()=>{
	console.log('write stream open')
})
ws.on('close',()=>{
	console.log('write stream close')
})
ws.on('end',()=>{
	console.log('write stream end')
})
ws.on('data',(chunk)=>{
	console.log('write stream data' chunk)
})