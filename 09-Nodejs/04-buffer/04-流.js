process.stdout.write('hello')



const {Writable} = require('stream')

class CustomWriter extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk)
		console.log(encoding)
		callback && callback()
	}
}

const writer = new CustomWriter()

writer.write('hello','',()=>{
	console.log('hello')
})

writer.write('ok')

writer.end('end')