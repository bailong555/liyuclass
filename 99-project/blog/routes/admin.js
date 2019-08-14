const express = require('express')
const UserModel = require('../models/user.js')
const pagination = require('../util/pagination.js')

const router = express.Router()

//管理员权限验证
router.get('/', (req, res,next) => {
    if(req.userInfo.isAdmin){
        next()
    }
    else{
        res.send('<h1>请用管理员账号登录</h1>')
    }
})

//显示管理员首页
router.get('/', (req, res) => {
    res.render("admin/index",{
    	userInfo:req.userInfo
    })
})
//显示用户列表页
router.get('/users', (req, res) => {
/*
	分页分析:
	前提条件:需要知道获取第几页,前端发送参数 page
	约定:每一页显示多少条数据,约定每页显示limit = 2 
	举例:
	1
	2
	3
	第一页 显示 第 1 , 2 skip(0)   limit(2)
	第二页 显示 第 3 , 4,跳过2条   limit(2)
	第三页 显示 第 5 , 6,跳过4条   limit(2)

	第 page 页,跳过(page-1)*limit 条

*/
	
	
/*
	let page = req.query.page
	const limit = 2
	page = parseInt(page)

	if(isNaN(page)){
		page = 1
	}

	//上一页边界控制
	if(page == 0){
		page = 1
	}

	//下一页边界控制
	UserModel.countDocuments((err,count)=>{
		//总页数
		const pages = Math.ceil(count / limit)
		//下一页边界控制
		if(page>pages){
			page = pages
		}
		//生成页码数
		var list = []
		for(let i =1;i<=pages;i++){
			list.push(i)
		}

		const skip = (page-1)*limit

		UserModel.find({})
		.sort({_id:-1})
		.skip(skip)
		.limit(limit)
		.then(users=>{
			res.render('admin/user_list',{
				userInfo:req.userInfo,
				users:users,
				page:page,
				list:list,
				pages:pages
			})
		})
		.catch(err=>{
			console.log('get users err',err)
		})
	})
*/
	let page = req.query.page
	const options = {
		page:req.query.page,
		model:UserModel,
		query:{},
		sort:{_id:-1},
		projection:"-password -__v"
	}
	pagination(options)
	.then(data=>{
		res.render('admin/user_list',{
			userInfo:req.userInfo,
			users:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/admin/users'
		})
	})
	.catch(err=>{
		console.log('get users err',err)
	})
})

module.exports = router