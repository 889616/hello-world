<template>
	<div>
		<van-nav-bar fixed title="能不能吃？" left-text="返回" left-arrow @click-left="onClickLeft" />
		<van-notice-bar text="重要的通知! 明日有雨,请带好雨伞!!萧萧暮雨子规啼~~~~~~" left-icon="volume-o" class="neng" />
        <div class="shiwu">
		  <van-search  placeholder="输入食物名称搜索？？" /><!-- v-model="value" -->
		</div>
		<ul>
			<li>
				<img src="../assets/92.jpg"/>
				<span>主食</span>
			</li>
			<li>
				<img src="../assets/92.jpg"/>
				<span>肉蛋类</span>
			</li>
			<li>
				<img src="../assets/92.jpg"/>
				<span>水果</span>
			</li>
			<li>
				<img src="../assets/92.jpg"/>
				<span>零食</span>
			</li>
			<li>
				<img src="../assets/92.jpg"/>
				<span>豆类</span>
			</li>
			<li>
				<img src="../assets/92.jpg"/>
				<span>菌类</span>
			</li>			
		</ul>
	</div>
</template>

<script>
	
	export default {
		
		dade(){
			return{
				value:""
			}
			
		},
		methods: {
		   
			onClickLeft() {
				this.$router.go(-1)
			},}}
</script>

<style scoped>
  img{dispaly:block;width:80px;height:60px}
div ul li{dispaly:block;width:100px;height:80px;float:left}
</style>
