const fs = require('fs')
//1.1同步分步骤
/*const fd = fs.openSync('./01.txt','a')

fs.writeSync(fd,'hello')

fs.closeSync(fd)*/
//1.2同步综合
/*fs.writeFileSync('./01.txt','hello',{'flag':'a'})*/

//2.1异步
/*fs.open('./02.txt','w',(err,fd)=>{
	if(err){
		console.log(err)
	}else{
		fs.write(fd,'hello',(err)=>{
			console.log(success)
		})
	}
	fs.close(fd,err=>{
		if(err){
			console.log(err)
		}else{
			console.log(success)
		}
	})
})*/
fs.writeFile('02.txt','hello',{'flag':'w'},err=>{
	if(err){
		console.log(err)
	}else{
		console.log('success')
	}
})




