<template>
  <div id="app">
		  <van-nav-bar :fixed="true" :title="title" />		
		  
		  <div class="section">
				<!-- <router-view  @toparenttt="getval"></router-view>   -->
				<Jinnang></Jinnang>
		  </div>
		  
		  <div class="footer">
				<van-tabbar v-model="active" >
						<van-tabbar-item >锦囊</van-tabbar-item>
						<van-tabbar-item to="/life" class="ziti">生活</van-tabbar-item>
						<van-tabbar-item :to="{name:'home'}" class="ziti">时光记</van-tabbar-item>
						<van-tabbar-item to="/xiaoxi" class="ziti">消息</van-tabbar-item>
						<van-tabbar-item to="/wode" class="ziti">我的</van-tabbar-item>
				</van-tabbar></div></div>
</template>

<script>
import Jinnang from './Jinnang'
export default {
  data() {
    return {
      active: 0,
	  title:"锦囊"
    }
  },
  components:{
Jinnang
  },
	methods:{
		getval(msg){
			this.title=msg
		}
	}
}
</script>
<style scoped>

.section{margin-top:46px}

</style>
