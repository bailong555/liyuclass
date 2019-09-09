
<template>
	<div class="Footer">
		<input type="checkbox" v-model="allDone">
		<span>{{totalDone}}/{{total}}</span>
		<button @click='handleDelAllDone()'>删除所有选中的任务</button>
	</div>
</template>

<script>
	export default {
		name:'Footer',
		props:{
			todos:Array,
			selectAllTodo:Function,
			delAllDone:Function
		},
		computed:{
			total(){
				return this.todos.length
			},
			totalDone(){
                return this.todos.reduce((total,item)=>{
                    if(item.done){
                        total = total + 1
                    }
                    return total
                },0)
            },
            allDone:{
            	get(){
            		return (this.total == this.totalDone) && (this.total != 0)
            	},
            	set(value){
            		this.selectAllTodo(value)
            	}
            }
		},
		methods:{
			handleDelAllDone(){
				if(window.confirm('你确定要删除所有选中的任务的吗?')){
					this.delAllDone()
				}
			}
		}
	}
</script>

<style scoped>
	.Footer{
		width: 538px;
		height: 30px;
		line-height:30px;
		margin: 10px 35px;
	}
	button{
		float:right;
		margin-top:3px;
		margin-right:10px;
	}
</style>



