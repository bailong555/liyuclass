const express = require('express')
const app = express()
const prot = 3000 
 
app.use(express.static('public'))

app.get('',(req,res)=> res.send('hello world'))

app.listen(prot,()=>())