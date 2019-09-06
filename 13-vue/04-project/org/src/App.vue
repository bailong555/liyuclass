
<template>
	<div id='app' >
		<Logo />
		<Message msg='你好' />
	</div>
</template>

<script>
	import Logo from './pages/logo.vue'
	import Message from './pages/message.vue'
	export default {
		name:'App',
		components:{
			Logo,
			Message
		}
	}
</script>

<style>

</style>



