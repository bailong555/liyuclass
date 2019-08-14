const express = require('express')
const swig = require('swig')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Cookies = require('cookies')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const app = express()
const port = 3000

//1.连接数据库
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true })

//获取db对象
const db = mongoose.connection

//连接数据库失败
db.on('error', (err) => {
    console.log('connection db error:',err)
    throw err
})
//连接数据库
db.once('open', () => {
    console.log('connection db success')
})

//静态资源处理
//所有静态资源回去请求 public目录下面的资源
//请求的是一个目录 去找目录下面的index,html
//如果找不到就会继续向下执行
//以/lib/bootstrap.min.css请求为例
//会在服务器端的public目录下面查找bootstrap.css并返回
app.use(express.static('public'))

//为了处理post/put请求的参数，设置bodyParser中间件
app.use(bodyParser.urlencoded({ extended:false }))

app.use(bodyParser.json())
//bodyParser中间件执行完毕后会把post/put请求的参数以对象的形式上保存在req.body上


//----------------模板设置开始---------------
//开发阶段设置不走缓存
swig.setDefaults({
  // cache: 'memory'
  cache:false
})
//配置应用模板
//第一个参数是模板名称,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html', swig.renderFile)

//配置模板的存放目录
//第一参数必须是views
//第二个参数是模板存放的目录
app.set('views', './views')

//注册模板引擎
//第一个参数必须是view engine
//第二个参数是模板名称,也就是app.engine的第一个参数
app.set('view engine', 'html')
//设置后就可以调用res.render()方法渲染模板
//---------------模板设置结束----------------
//设置Cookie中间件
/*
app.use((req,res,next)=>{
	//生成cookies对象并保存在req对象上
	req.cookies = new Cookies(req,res)
	
	let userInfo = {}
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}

	req.userInfo = userInfo
	next()
})
*/


//设置session中间件
//s%3AMfRiRdYJ6IOnblsnbSOidRPDJ6n0Uld7.hjY8wuwvYn64pWrHapo1mJLYC4b8IZOXOeWm9SxM81E
app.use(session({
	//设置cookie名称
	name:'kzid',
	//用它来对session cookie签名，防止篡改
	secret:'abc',
	//强制保存session即使他并没有变化
	resave:true,
	//强制将未初始化的session存储
	saveUninitialized:true,
	//如果为true，则每次请求都更新cookie的过期时间
	rolling:true,
	//cookie过期时间为 1天
	cookie:{maxAge:1000*60*60*24},
	//设置session存储在数据库中
    store:new MongoStore({ mongooseConnection: mongoose.connection }) 
}))

app.use((req,res,next)=>{	
	req.userInfo = req.session.userInfo || {}
	next()
})

//---------------路由设置开始----------------
//从上向下匹配以制定路径开头的路由
//匹配到后，在匹配路由对象中的路径
//以/user/register为例
//首先匹配到 / 去 ./routes/index.js的router对象中找/user/register路径
//找不到后继续向下执行，匹配的/user去./routes/user.js的router对象找register路径
//匹配到后执行里面的函数，在函数中如果res上由返回的函数整个请求结束

app.use("/",require('./routes/index.js'))
app.use("/user",require('./routes/user.js'))
app.use("/admin",require('./routes/admin.js'))
app.use("/category",require('./routes/category.js'))
//---------------路由设置结束----------------


app.listen(port, () => console.log(`app listening on port ${port}!`))







