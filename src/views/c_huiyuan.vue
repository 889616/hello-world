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
    <div style="overflow:auto;margin-top:55px;">
      <div>
        <!-- 轮播 -->
        <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item> <img src="../assets/1.jpeg" style="width:100%;height:200px"></van-swipe-item>
        <van-swipe-item><img src="../assets/8.jpg" style="width:100%;height:200px"></van-swipe-item>
        <van-swipe-item><img src="../assets/6.jpg" style="width:100%;height:200px"></van-swipe-item>
        <van-swipe-item><img src="../assets/7.jpg" style="width:100%;height:200px"></van-swipe-item>
        </van-swipe>
        <!-- 图像文字 -->
        <van-grid :column-num="3">
          <van-grid-item
            v-for="(value,index) in jifen"
            :key="index"
            :icon="value.icon"
            :text="value.name"
          />
        </van-grid>
        <!-- 标题 -->
        <p style="text-align:center;height:40px;font-size:18px;line-height:40px;">时光会员,专享好货</p>
      </div>

      <!-- 商品展示 -->
      <div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item
            v-for="(item,index) in list"
            :key=index
            style="height:230px;overflow:hidden;"
            @click="tap(item.pid)"
          >
            <van-image :src="item.pimg" style="height:150px;"/>
            <p style="font-size:12px;height:30px;line-height:30px;width:100%;">{{item.pname}}</p>
            <p style="font-size:10px;height:23px;line-height:23px;width:100%;">{{item.pdesc}}</p>
            <p style="font-size:10px;height:23px;line-height:23px;width:100%;">￥{{item.pprice}}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "c_huiyuan",
  data() {
    return {
      title: "会员中心",
  
      jifen: [
        {
          name: "我的积分",
         
          icon: "flower-o"
        },
        {
          name: "每日签到",
        
          icon: "records"
        },
        {
          name: "我的奖品",
         
          icon: "point-gift-o"
        }
      ],
      list: []
    };
  },
  mounted() {
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 16761 }
    }).then(data => {
      console.log(data.data.data);
      this.list = data.data.data;
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    tap(id) {
      this.$router.push("/c_xiangqing/" + id);
    }
  }
};
</script>
<style scoped>
</style>