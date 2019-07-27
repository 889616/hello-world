<template>
  <div>
    <!-- <Top></Top> -->
    <div>
      <!-- 个人信息 -->
      <div style="margin-top:-12rem;position:fixed;width:100%">
        <SgjHander></SgjHander>
      </div>

      <!-- 导航标签 -->
      <van-row type="flex" justify="space-between" class="home">
        <van-col span="6">
          <van-button type="default" style="width:100%;height:100%" :to="{name:'dcim'}">云相册</van-button>
        </van-col>
        <van-col span="6">
          <van-button type="default" style="width:100%;height:100%" :to="{name:'babycare'}">成长记录</van-button>
        </van-col>
        <van-col span="6">
          <van-button type="default" style="width:100%;height:100%" :to="{name:'achievement'}">成就</van-button>
        </van-col>
        <van-col span="6">
          <van-button
            type="default"
            style="width:100%;height:100%"
            :to="{name:'missionfriends'}"
          >亲友团</van-button>
        </van-col>
      </van-row>
    </div>

    <!-- 中间展示 -->
    <div >
      <SgjThree></SgjThree>
    </div>

    <!-- 底部导航 -->
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item name="jinnang" :to="{name:'index'}">锦囊</van-tabbar-item>
      <van-tabbar-item name="shenghuo" :to="{name:'life'}">生活</van-tabbar-item>
      <van-tabbar-item name="home" >时光记</van-tabbar-item>
      <van-tabbar-item name="news">消息</van-tabbar-item>
      <van-tabbar-item name="me" to="c_wode">我的</van-tabbar-item>
    </van-tabbar> -->
 
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import SgjHander from "@/components/SgjHander.vue";
import SgjThree from "@/components/SgjThree.vue";

import Top from "@/components/Top";

export default {
  name: "home",
  components: {
    SgjHander,
    SgjThree,
    Top
  },
  data() {
    return {
      active: "home"
    };
  }

  // mounted() {
  //   console.log(123);
  //   axios
  //     .get("http://106.12.11.4:8888/ShiGuangJi/shiguangji/yunphoto.do")
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }
};
</script>

<style scoped>
.home {
  top: 8rem;
  /* width: 23.44rem; */
  width: 100%;
  /* width: 23.44rem; */
  height: 1.5rem;
  position: fixed;
}
</style>
