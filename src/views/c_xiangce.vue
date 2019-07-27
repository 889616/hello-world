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
    <div style="margin-top:55px;margin-bottom:50px">
      <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="(item,index) in list" :key=index style="height:200px;overflow:hidden;">
          <p style="width:100%;height:20px;line-height:20px;font-size:14px;">{{item.name}}</p>
          <van-image :src="item.img" style="height:150px;"/>
          <p style="width:100%;height:20px;line-height:20px;font-size:14px;">
            ￥{{item.price}}
            <van-rate
              v-model="value"
              color="#f00"
              icon="like"
              :count="1"
              style="float:right;margin-right:10px;height:20px;"
            />
          </p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "c_xiangce",
  data() {
    return {
      title: "制作相册",
      list: [],
      value: 3
    };
  },
  mounted() {
    axios({
      url: "http://www.baidu.com/api"
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