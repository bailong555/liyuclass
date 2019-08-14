const {Readable} = require('stream')

class CustomReader extends Readable{
	constructor(){
		super()
		this.index = 0
	}

	_read(){
		this.index++
		if(this.index>5){
			this.push(null)
		}else{
			this.push(this.index+'')
		}
	}
}

const reader = new CustomReader()
/*
let body = ''

reader.on('end',()=>{
	console.log('end')
	console.log(body)
})

reader.on('data',(chunk)=>{
	body+=chunk
})
*/
reader.pipe(process.stdout)

process.stdout.on('data',()=>{
	console.log(a)
})