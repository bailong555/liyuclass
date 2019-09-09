
<template>
	<div id='app' >
		<Header :addTodo='addTodo' />
		<List :todos='todos' :delTodo='delTodo'/>
		<Footer :todos='todos' 
		:selectAllTodo='selectAllTodo'
		:delAllDone = 'delAllDone'
		 />
	</div>
</template>

<script>
	import Header from './pages/Header.vue'
	import List from './pages/List.vue'
	import Footer from './pages/Footer.vue'
	export default {
		name:'App',
		//注册组件
		components:{
			Header,
			List,
			Footer
		},
		data(){
			return {
				todos:[
					{
						task:'吃饭',
						done:false
					},
					{
						task:'睡觉',
						done:false
					},
					{
						task:'玩游戏',
						done:false
					},
				]
			}
		},
		methods:{
			addTodo(todo){
				this.todos.unshift(todo)
			},
			delTodo(index){
                this.todos.splice(index,1)
            },
            selectAllTodo(value){
            	this.todos.forEach((item)=>{
            		item.done = value
            	})
            },
            delAllDone(){
            	this.todos = this.todos.filter(item=>!item.done)
            }
		}
	}
</script>

<style scoped >
	#app{
		width: 600px;
		margin: 100px auto;
		box-sizing:border-box;
	}
</style>



