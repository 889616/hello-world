<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      fixed
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="wd-nav"
      style="height:55px;line-height:55px"
    />
    <!-- 商品展示 -->
    <div style="margin-top:55px;margin-bottom:50px">
      <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="(item,index) in list" :key=index style="width:150px;height:220px;overflow:hidden;">
          <van-image :src="item.img" style="height:150px;"/>
          <div style="border-top:1px solid #f00;width:100%;height:69px;">
            <p style="margin:0">{{item.address}}</p>
            <p style="margin:0">{{item.time}}</p>
            <van-rate
              icon="like"
              void-icon="like-o"
              :count="1"
              color="#f00"
              style="float:right;margin-right:10px"
            />
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { Rate } from "vant";

import { Toast } from "vant";
import axios from "axios";
export default {
  name: "c_shoucang",
  data() {
    return {
      title: "我的收藏",
      list: [],
      //value: 3
    };
  },
  mounted() {
    axios({
      url: "http://www.jingdong.com/api"
    }).then(data => {
      console.log(data.data);
      this.list = data.data.list;
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>

</style>