<template>
	<div>
		<van-nav-bar fixed title="百问百科" left-text="返回" left-arrow @click-left="onClickLeft" />
		<van-notice-bar text="重要的通知! 明日有雨,请带好雨伞!!萧萧暮雨子规啼~~~~~~" left-icon="volume-o" class="neng" />
        <div class="shiwu">
		  <van-search placeholder="请输入食物名称搜索" /><!-- v-model="value" -->
		</div>
		<ul class="quan" style="font-size: 10px;">
			<li>孕期</li>
			<li>0-1</li>
			<li>1-3</li>
			<li>3-6</li>
		</ul>
		<div style="padding:10px 20px"><img src="../assets/9.jpg" style="border-radius: 30px;width:100%;height: 90px;"/></div>
	   <div class="yuan2">
	   	<ul style="font-size:12px" >
	   	
			
					<li><img src="../assets/96.jpg"><span>孕前准备</span></li>
					<li><img src="../assets/96.jpg"><span>孕期检查</span></li>
					<li><img src="../assets/96.jpg"><span>孕期生活</span></li>
					<li><img src="../assets/96.jpg"><span>产后</span></li>
				
	
	   	</ul>	
	   </div>
	   <ul class="yunma">
		   <li>
			   <img src="../assets/91.jpg"/>
			   <span>
				    <p>孕妈吃对了，宝宝更聪明</p>
			        <i>999万人阅读</i>
			   </span>
			  
		   </li>
		   <li>
		   	    <img src="../assets/91.jpg"/>
		   		<span>
		   			 <p>想要宝宝更聪明，这些益智食物可以多吃！</p>
		   			 <i>9099万人阅读</i>
		   		</span>		   			  
		   </li>
		   <li>
		   			   <img src="../assets/91.jpg"/>
		   			   <span>
		   				    <p>孕妈吃对了，宝宝更聪明</p>
		   			        <i>999万人阅读</i>
		   			   </span>
		   			  
		   </li>
		   <li>
		   	    <img src="../assets/91.jpg"/>
		   		<span>
		   			 <p>想要宝宝更聪明，这些益智食物可以多吃！</p>
		   			 <i>9099万人阅读</i>
		   		</span>		   			  
		   </li>
		   <li>
		   			   <img src="../assets/155.jpg"/>
		   			   <span>
		   				    <p>孕妈吃对了，宝宝更聪明</p>
		   			        <i>999万人阅读</i>
		   			   </span>
		   			  
		   </li>
		   <li>
		   	    <img src="../assets/155.jpg"/>
		   		<span>
		   			 <p>想要宝宝更聪明，这些益智食物可以多吃！</p>
		   			 <i>9099万人阅读</i>
		   		</span>		   			  
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
	list{list-style: none;}
	*{margin: 0;padding:0}
	.yuan2{width: 100%;}
	.yuan2 ul li img{width:42px;height:42px;display:block;border-radius:50%;}
	.yuan2 ul li{width:60px;height:70px}
	.yuan2 ul{display:flex;  justify-content:space-around;}
	div .quan{display:flex;justify-content: space-around;margin-top: 10px;}
	.neng{margin-top:50px}
	.van-search {width:315px;height:34px;margin-top: 10px;
	}
	.shiwu{display:flex;justify-content:center;}
	.yunma{height:260px;padding:0 30px}
	.yunma li{background: #cecece; height:70px;padding:15px 40px; margin-bottom: 20px;font-size: 12px;}
	.yunma img{display:block;border:0;width:40px;height:50px;float: left;}
	.yunma span{float: right;}
	.yunma li span p{width:125px}
	.yunma li span i{display: block;}
</style>
