<template>
	<div class="shenghuo">
		<h1>生活</h1>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"生活"
			}
		},
		mounted(){
			this.$emit("toparenttt",this.title)
		}
	}
</script>

<style scoped>
	.shenghuo{margin-top: 60px;}
</style>
