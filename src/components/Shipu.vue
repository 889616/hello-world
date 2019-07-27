<template>
	<div>
		<van-nav-bar fixed title="食谱" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="ding">
			<img class="tupian" src="../assets/122.jpg" alt="不显示!!">
			<div class="yuan">
				<ul>
					<li @click="neng"><img src="../assets/155.jpg"><span>能不能吃？</span></li>
					<li @click="ying"><img src="../assets/16.jpg"><span>营养食谱</span></li>
					<li @click="shou"><img src="../assets/17.jpg"><span>我的收藏</span></li>
				</ul>	
			</div>
		</div>
		<van-list class="wenzi" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<van-cell class="hua" style="background:#f0f0f0" v-for="(item,i) in list" :key='i'>
				<img @click="tu" :src="item.photo" style="weight:50px;height:50px;float:left;margin-top: 30px;"/>
				<div style="float:right;width:200px">
				<h3>{{item.food}};</h3>
				<p style="font-size: 12px;">{{item.detail}},</p>
				<p style="font-size: 12px;">{{item.year}},</p>
				</div>
			</van-cell>
		</van-list>
	</div>

</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				list: [],
				loading: false,
				finished: false,
				imgs:"",
				
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			neng(){
				this.$router.push("/nengchi")
			},
			ying(){
				this.$router.push("/yingyang")
			},
			shou(){
				this.$router.push("/shoucang")
			},
			tu(){
				this.$router.push("/jiuniang")
			},
			onLoad() {
				// 异步更新数据
				setTimeout(() => {
					axios({
						url: "http://106.12.11.4:8888/ShiGuangJi/shiguangji/shipu.do"
					}).then((data) => {
						console.log(data.data.data)
						this.list = data.data.data;
			
					})
			
					// 加载状态结束
					this.loading = false;
			
					// 数据全部加载完成
					if (this.list.length <= 35) {
						this.finished = true;
					}
				}, 500);
			},

		}
	}
</script>

<style scoped>
	* { margin: 0; padding: 0; }
	li { list-style: none; }	
	img { display: block; border: none; }
	.tupian { z-index:50;width: 100%;height: 200px;}
	.ding{ z-index:33;position:fixed;top:46px}
	.yuan{ z-index:33;font-size:12px;width: 100%;height:160px;border-radius:45% 45% 0 0;background:#fff;position:fixed;top:166px}
    .yuan ul li img{width:52px;height:52px;display:block;border-radius:50%;border:1px solid #f0f}
	.yuan ul li{width:60px;height:70px}
	.yuan ul{display:flex;  justify-content:space-around;margin-top:50px;}
	.yuan li span{display: block;margin-top:10px;}
	.wenzi{margin-top:330px}


</style>
