
<template>
	<div id='app' >
		<Header />
		<List />
		<Footer />
	</div>
</template>

<script>
	import Header from './pages/Header.vue'
	import List from './pages/List.vue'
	import Footer from './pages/Footer.vue'
	export default {
		name:'App',
		components:{
			Header,
			List,
			Footer
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



