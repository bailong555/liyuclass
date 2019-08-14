const EventEmitter = require('events')

/*const emitter = new EventEmitter

emitter.on('test',()=>{
	console.log('execte test fn...')
})
console.log(EventEmitter)*/

class CustomEmitter extends EventEmitter{
}
const emitter = new CustomEmitter()

emitter.setMaxListeners(15)
emitter.on('test',()=>{
	console.log('execte test fn1...')
})
emitter.on('test',()=>{
	console.log('execte test fn2...')
})
emitter.on('test',()=>{
	console.log('execte test fn3...')
})
emitter.on('test',()=>{
	console.log('execte test fn4...')
})
emitter.on('test',()=>{
	console.log('execte test fn5...')
})
emitter.on('test',()=>{
	console.log('execte test fn6...')
})
emitter.on('test',()=>{
	console.log('execte test fn7...')
})
emitter.on('test',()=>{
	console.log('execte test fn8...')
})
emitter.on('test',()=>{
	console.log('execte test fn9...')
})
emitter.on('test',()=>{
	console.log('execte test fn10...')
})
emitter.on('test',()=>{
	console.log('execte test fn11...')
})
emitter.on('test',()=>{
	console.log('execte test fn12...')
})
emitter.emit('test')
// emitter.removeListener(eventName,listener)
emitter.off('test',listener)