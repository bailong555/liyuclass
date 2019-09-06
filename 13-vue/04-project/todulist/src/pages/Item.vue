
<template>
	<div class="Item"
		:style="{backgroundColor:bgColor}"
		@mouseenter='handleShow(true)'
		@mouseleave="handleShow(false)" 
	>
		<input type="checkbox">
		<span>吃饭</span>
		<button v-if='isShow'>删除</button>
	</div>
</template>

<script>
	export default {
		name:'Item',
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



