<template>
	<div style="margin-top: 60px;">
		<h1>时光记</h1>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"时光记"
			}
		},
		mounted(){
			this.$emit("toparenttt",this.title)
		}
	}
</script>

<style>
</style>
