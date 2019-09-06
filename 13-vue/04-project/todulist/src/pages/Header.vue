
<template>
	<div class="Header">
		<h3>Todulist</h3>
		<input type="text">
		<button>添加</button>
	</div>
</template>

<script>
	export default {
		name:'Header'
	}
</script>

<style scoped> 
	h3{
		text-align:center;
	}
	input{
		width: 460px;
		height: 35px;
		margin-left:35px;
		box-sizing:border-box;
	}
	button{
		width: 80px;
		height: 36px;
		border-left:none;
	}
</style>



