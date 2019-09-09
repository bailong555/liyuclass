
<template>
	<div class="Item"
		:style="{backgroundColor:bgColor}"
		@mouseenter='handleShow(true)'
		@mouseleave="handleShow(false)" 
	>
		<input type="checkbox" v-model="todo.done">
		<span>{{todo.task}}</span>
		<button v-if='isShow'
			@click='handelDel()'
		>删除</button>
	</div>
</template>

<script>
	export default {
		name:'Item',
		props:{
			todo:Object,
			index:Number,
			delTodo:Function
		},
		data(){
			return {
				bgColor:'#fff',
				isShow:false
			}
		},
		methods:{
			handleShow(flag){
				this.bgColor = flag ? '#eee' : '#fff'
				this.isShow = flag
			},
			handelDel(){
				if(window.confirm('你确定要删除'+this.todo.task+'吗?')){
					this.delTodo(this.index)
				}
			}
		}
	}
</script>

<style scoped>
	.Item{
		width: 538px;
		height: 30px;
		line-height:30px;
		margin: 10px 35px;
		border: 1px solid #ccc;
	}
	button{
		float:right;
		margin-top:3px;
		margin-right:10px;
	}
</style>



