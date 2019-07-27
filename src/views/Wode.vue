<template>
	<div style="margin-top: 60px;">
		<h1>我的</h1>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"我的"
			}
		},
		mounted(){
			this.$emit("toparenttt",this.title)
		}
	}
</script>

<style>
</style>
