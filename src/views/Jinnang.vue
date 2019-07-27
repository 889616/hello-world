<template>
	<div>
		<div>
				<form action="/" >
					<van-search placeholder="请输入搜索关键词" />
				</form>
				<!-- <van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(image, index) in images" :key="index">
					<img :src="image" style="width:100%;height:200px"/>    
				   </van-swipe-item>
				</van-swipe> -->
				<van-swipe :autoplay="3000" indicator-color="white">
					<van-swipe-item><img class="jpgg" src="../assets/111.jpg" alt="皮卡丘"></van-swipe-item>
					<van-swipe-item><img class="jpgg" src="../assets/222.jpg" alt="皮卡丘"></van-swipe-item>
					<van-swipe-item><img class="jpgg" src="../assets/555.jpg" alt="皮卡丘"></van-swipe-item>
					<van-swipe-item><img class="jpgg" src="../assets/222.jpg" alt="皮卡丘"></van-swipe-item>
				</van-swipe>
				<div class="flexx">
					<div>
						<router-link to="/shipu">食谱</router-link>
					</div>
					<div>
						<router-link to="/baike">百科</router-link>
					</div>
					<div>
						<router-link to="/wenda">问答</router-link>
					</div>
				</div>
		</div>
		<div>
			<van-list  v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<van-cell style="border: 1px solid burlywood;margin-top: 20px;" class="hua" v-for="(item,i) in list" :key=i>
					<p style="float:right;width:160px">{{item.detail}},</p>
					<img :src="item.detailphoto" style="width:100px;height:100px;float:left" />
				</van-cell>
			</van-list>
		</div>
	
	</div>
</template>

<script>
	import axios from 'axios';
	export default {

		data() {
			return {
				/* images:[
				     'https://img.yzcdn.cn/vant/apple-1.jpg',
				     'https://img.yzcdn.cn/vant/apple-2.jpg',
				   ] */
				list: [],
				loading: false,
				finished: false,
				
				title:"锦囊"
			}
		},
		mounted(){
			this.$emit("toparenttt",this.title)
		},
		methods: {


			onLoad() {
				// 异步更新数据
				setTimeout(() => {
					axios({
						url: "http://106.12.11.4:8888/ShiGuangJi/shiguangji/jinnang.do"
					}).then((data) => {
						console.log(data.data.data.sjinnangs)
						this.list = data.data.data.sjinnangs;

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
	* {
		padding: 0;
		margin: 0;
	}

	.jpgg {
		display: block;
		width: 100%;
		height: 200px;
		
	}

	.flexx {
		margin-top:10px;
		font-size:14px;
		display: flex;
		justify-content: space-around;
	}

	.hua {
		height: 110px;
		margin-bottom: 30px;
	}
</style>
