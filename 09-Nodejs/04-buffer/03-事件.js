const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{
}

const emitter = new CustomEmitter()

emitter.on('newListener',(eventName,cb)=>{
	console.log('execte newListener fn1...')
	console.log(eventName)
	cb()
})

emitter.on('test',()=>{
	console.log('execte test fn1...')
})
emitter.on('test',()=>{
	console.log('execte test fn2...')
})