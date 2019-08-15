const defaultState = {
	list:['吃饭','睡觉'],
	task:''
}
/*
	1.reducer是一个函数,并且是一个纯函数(固定的输入就会有固定的输入),
	  主要作用是用来处理业务数据
	2.reducer需要返回一个新的state对象,不饿能更改参数中传递过来的state，
	  原因是因为传递过来的state是store当中的state,所有的组建都共享
	  store中的state,这个state由store来维护,store根据reducer返回的
	  新的state来更改自己的state,在组件中getState()返回的是store中的state
*/

export default (state=defaultState,action)=>{
	console.log(state,action)
	
	if(action.type == "change_item"){
		//错误的写法
		//state.task = action.payload
		const newState = JSON.parse(JSON.stringify(state))
		newState.task = action.payload
		//不是纯函数
		//newState.task = action.payload + Date.now()
		//newState.task = action.payload + Math.random()
		return newState
	}

	return state
}