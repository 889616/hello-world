<template>
  <div>
    <router-view />

<van-tabbar v-model="active" style="border-top:1px solid #cecece;">
      <van-tabbar-item icon="home-o" to="index">锦囊</van-tabbar-item>
      <van-tabbar-item icon="search" to="Life">生活</van-tabbar-item>
      <van-tabbar-item icon="envelop-o" to="/Home">时光记</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/c_xiaoxi">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/c_wode">我的</van-tabbar-item>
</van-tabbar>

  </div>
</template>
<script>
export default {
  name: "c_dibulan",
  data() {
    return {
      active: 0
    };
  },
  
};
</script>
<style scoped>
router-view {
  margin-bottom: 50px;
  overflow: auto;
}
</style>
