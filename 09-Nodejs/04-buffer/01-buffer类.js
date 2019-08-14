const buf1 = Buffer.from('a')
console.log(buf1)

const buf2 = Buffer.from('你')
console.log(buf2)

const buf3 = Buffer.alloc(3)
console.log(buf3)

const buf4 = Buffer.alloc(3)
console.log(buf4)
buf4[0]=0xe4
console.log(buf4)
buf4[1]=0xbd
console.log(buf4)
buf4[2]=0xa0
console.log(buf4.toString())