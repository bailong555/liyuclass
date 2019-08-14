/*
[pagination description]
@param  {[object]} options[参数]
page:当前页
model:要处理的数据模型
query:查询条件
sort:排序
projection:投影
 */

async function pagination(options){
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
	
	let { page,model,query,sort,projection } = options
	const limit = 2
	page = parseInt(page)

	if(isNaN(page)){
		page = 1
	}

	//上一页边界控制
	if(page == 0){
		page = 1
	}

	const count = await model.countDocuments()

	//总页数
	const pages = Math.ceil(count / limit)
	//下一页边界控制
	if(page>pages){
		page = pages
	}
	if(page == 0){
		page = 1
	}
	//生成页码数
	var list = []
	for(let i =1;i<=pages;i++){
		list.push(i)
	}

	const skip = (page-1)*limit

	const docs = await model.find(query,projection)
	.sort({_id:-1})
	.skip(skip)
	.limit(limit)

	return {
		docs:docs,
		page:page,
		list:list,
		pages:pages
	}
}
	

module.exports = pagination