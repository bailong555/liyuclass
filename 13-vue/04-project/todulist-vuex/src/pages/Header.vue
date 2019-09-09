
<template>
	<div class="Header">
		<h3>Todulist</h3>
		<input type="text"
			placeholder="请输入任务"
			v-model = 'task'
			@keyup.enter='handleAdd()' 
		>
	</div>
</template>

<script>
	export default {
		name:'Header',
		props:{
			addTodo:Function
		},
		data(){
			return {
				task: ''
			}
		},
		methods:{
			handleAdd(){
				//1.校验数据
				const task = this.task.trim() 
				if(!task){
					alert('请输入任务')
					return 
				}
				//2.封装任务对象
				const todo = {
					task,
					done:false
				}
				//3.将任务对象输入到任务等级
				this.addTodo(todo)
				//4.清空输入框
				this.task = ''
			}
		}
	}
</script>

<style scoped> 
	h3{
		text-align:center;
	}
	input{
		width: 540px;
		height: 35px;
		margin-left:35px;
		box-sizing:border-box;
	}
</style>



