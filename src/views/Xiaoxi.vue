<template>
	<div>
		<h1 style="margin-top: 60px;">消息</h1>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"消息"
			}
		},
		mounted(){
			this.$emit("toparenttt",this.title)
		}
	}
</script>

<style>
</style>
