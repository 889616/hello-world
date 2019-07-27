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
        <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="(item, index) in list" :key="index" style="border：1px solid #cecece;">
        <van-image :src="item.pimg" style="width:152px;height:152px;border-radius:10px;overflow: hidden;"/>
        <p style="font-size:16px">{{item.pname}}</p>
        <p style="font-size:12px">会员价 ￥{{item.pprice/1000}}</p>
        </van-grid-item>
        
        
        </van-grid>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "c_qingjie",
  data() {
    return {
      title: "清洁",
      list:"",
    };
  },
  mounted() {
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 16761 }
    }).then(data => {
      console.log(data.data.data);
      this.list=data.data.data
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