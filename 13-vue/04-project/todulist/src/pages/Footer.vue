
<template>
	<div class="Footer">
		<input type="checkbox">
		<span>2/3</span>
		<button>删除所有完成的任务</button>
	</div>
</template>

<script>
	export default {
		name:'Footer'
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



