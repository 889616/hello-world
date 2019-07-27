<template>
	<div>
		<van-nav-bar fixed :title="title" left-arrow @click-left="onClickLeft" class="wd-nav" />

		<div style="margin:55px 10px 59px;border: 2px solid yellow;overflow:auto;" id="ltk">
			<ul ref="hello">
				<!-- 1 -->
				<li v-for="(item,index) in message_array" :key="index" style="border: 3px solid green;">
					<div v-if="index%2 == 0" style="min-height:110px;border: 2px solid indianred;">
						<!-- 右侧 -->
						<div style="height:55px">
							<van-image width="50" height="50" src="./assets/96.jpg" style="border-radius:50%;float:right;margin-left:10px;" />
							<span style="float:right;">右侧时间:{{item.sj}}</span> <!-- 右侧时间 -->
						</div>
						<p style="min-height:30px;border:1px solid #redfont-size:14px;margin-top:10px;float:right;">{{item.par}}</p>
					</div>


					<div v-if="index%2 != 0" style="min-height:110px;border: 2px solid skyblue;">
						<!-- 左侧 -->
						<div style="height:55px">
							<van-image width="50" height="50" src="" style="border-radius:50%;overflow: hidden;float:left;margin-right:10px;" />
							<span style="float:left;margin:5px 10px 0 0;">左侧时间:{{item.sg}}</span> <!-- 左侧时间 -->
						</div>
						<p style="min-height:30px;border:1px solid #cecece;
						border-radius:4px;line-height:30px;font-size:14px;
						margin-top:10px;float:left;padding:0 5px;">{{item.prr}}</p>
					</div>
				</li>
			</ul>
		</div>
		<div>
			<van-goods-action style="height:38px;padding:10px 0;border-top:1px solid #cecece;">
				<van-goods-action-icon icon="chat-o" />
				<input v-model="message" id="btn" type="text" style="width:242px;height:35px;border:1px solid #cecece;border-radius:10px;" />
				<van-button round type="primary" @click="dealMessage" style="height:37px;line-height:37px;margin:0 10px;">发送</van-button>
			</van-goods-action>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from "vant";
	import axios from "axios";
	export default {
		name: "c_liaotian",
		data() {
			console.log(this.$route)
			return {
				title: this.$route.params.id,
				message: "",
				message_array: [],
			};
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},

			dealMessage: function() {
				var obtn = document.getElementById("btn");
				let oDate = new Date(); //时间
				let xs = oDate.getHours(); //小时   xs
				let fz = oDate.getMinutes(); //分钟   fz
				let hm = oDate.getSeconds(); // 秒    hm
				if (xs < 10 && xs >= 0) {
					xs = "0" + xs;
				} else {
					xs = xs
				}
				if (fz < 10 && fz >= 0) {
					fz = "0" + fz;
				} else {
					fz = fz
				}
				if (hm < 10 && hm >= 0) {
					hm = "0" + hm;
				} else {
					hm = hm
				} //分钟个位数的话  前面添加零~~
				let time = xs + ":" + fz + ":" + hm;
				if (obtn.value == "") {
					Toast('内容不能为空');
				} else {
					this.message_array.push({
						par: this.message,
						sj: time
					});
					var tag = this.message;
					this.message = "";
					  this.$nextTick(() => {
					    var ltk = document.getElementById("ltk"); //获取dom
					    ltk.scrollTop = ltk.offsetHeight;
					    });
				}

				axios //请求人工智障接口
					.get("http://i.itpk.cn/api.php", {
						params: {
							question: tag,
							api_key: "6d6f6e2ba4d88377b54107e29047994b",
							api_secret: "6w3h17ufope0"
						}
					})
					.then(ret => {
						let oDate = new Date();
						let xs = oDate.getHours();
						let fz = oDate.getMinutes();
						let hm = oDate.getSeconds();
						if (xs < 10 && xs >= 0) {
							xs = "0" + xs;
						} else {
							xs = xs
						}
						if (fz < 10 && fz >= 0) {
							fz = "0" + fz;
						} else {
							fz = fz
						}
						if (hm < 10 && hm >= 0) {
							hm = "0" + hm;
						} else {
							hm = hm
						} //分钟个位数的话  前面添加零~~
						let time = xs + ":" + fz + ":" + hm;
						this.message_array.push({
							prr: ret.data,
							sg: time
						});
					})
					.then(() => {
						ltk.scrollTop = ltk.scrollHeight;
					});

			}
		}
	};
</script>
<style scoped>
	#ltk {
		height: 550px;
	}
</style>
