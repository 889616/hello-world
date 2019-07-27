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
    <div style="margin-top:55px;">
      <ul>
        <li style="height:70px;line-height:70px" @click="onClickRight">
          <van-icon name="point-gift-o" size="25px" style="margin:0 15px;" />
          <span>全部</span>
        </li>
        <li style="height:70px;line-height:70px" @click="onClickRight">
          <van-icon name="label-o" size="25px" style="margin:0 15px" />
          <span>待付款</span>
        </li>
        <li style="height:70px;line-height:70px" @click="tap()">
          <van-icon name="shop-collect-o" size="25px" style="margin:0 15px" />
          <span>待收货</span>
        </li>
        <li style="height:70px;line-height:70px" @click="onClickRight">
          <van-icon name="award-o" size="25px" style="margin:0 15px" />
          <span>待发货</span>
        </li>
        <li style="height:70px;line-height:70px" @click="onClickRight">
          <van-icon name="cluster-o" size="25px" style="margin:0 15px" />
          <span>已完成</span>
        </li>
        <li style="height:70px;line-height:70px" @click="onClickRight">
          <van-icon name="edit" size="25px" style="margin:0 15px" />
          <span>评价</span>
        </li>
        <li style="height:70px;line-height:70px" @click="onClickRight">
          <van-icon name="free-postage" size="25px" style="margin:0 15px" />
          <span>退款/售后</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "c_dingdan",
  data() {
    return {
      title: "我的订单"
      // list:[{name:"",icon:"",to:"/daishouhuo"},{name:"",icon:""},{name:"",icon:"",to:"/daishouhuo"},{name:"",icon:""},{name:"",icon:""},{name:"",icon:""},{name:"",icon:""}]
    };
  },
  mounted() {
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 16761 }
    }).then(data => {
      //console.log(data.data.data)
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    tap() {
      this.$router.push("/c_daishouhuo");
    },
    onClickRight() {
      Toast("点击待收货");
    }
  }
};
</script>
<style scoped>
</style>