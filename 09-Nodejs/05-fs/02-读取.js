const fs = require('fs')
const util = require('util')


/*const fd = fs.openSync('./01.txt','w')

const buf = Buffer.alloc(100)

fs.readSync(fd,buf,0,50,5)
console.log(buf)
console.log(buf.toString())

fs.closeSync(fd)*/

fs.readFile('./01.txt')