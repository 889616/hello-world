<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      fixed
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      class="wd-nav"
      style="height:55px;line-height:55px"
    />
    <div style="margin-bottom:50px;overflow: hidden;font-size:14px;margin-top:55px;">
      <van-row>
        <van-col span="1"></van-col>
        <van-col span="22">
          <!-- 图片 -->
          <div style="width:100%;height:230px;">
            <van-image width="100%" height="100%" :src="detail.pimg" style="border" />
          </div>
          <!-- 商品名称 -->
          <p style="width:100%;height:30px;margin:5px 0;line-height:30px;">
            <span style="float:left">{{detail.pname}}</span>
            <span style="float:right">￥{{parseInt(detail.pprice/1000)}}</span>
          </p>
          <!-- 数量加减 -->
          <div style="height:29px;line-height:29px;margin:5px 0;">
            <p style="float:left">数量：</p>
            <van-stepper v-model="value" style="float:left;margin-left:10px" />
          </div>
          <!-- 尺寸选择 -->
          <div style="margin:5px 0;">
            <p style="margin:10px 0;">尺寸</p>
            <van-steps :active="active">
              <van-step>30cm</van-step>
              <van-step>40cm</van-step>
              <van-step>50cm</van-step>
              <van-step>60cm</van-step>
              <van-step>70cm</van-step>
            </van-steps>
            <van-button type="default" @click="add()" style="height:22px;line-height:20px">选择</van-button>
          </div>
          <!-- 颜色选择 -->
          <div style="width:100%;height:45px;margin:5px 0;">
            <p style="margin:10px 0;">颜色</p>
            <van-radio-group v-model="radio">
              <van-radio name="1" checked-color="#00ffff" style="float:left;margin:0 10px;"></van-radio>
              <van-radio name="2" checked-color="#ff0f0f" style="float:left;margin:0 10px;"></van-radio>
              <van-radio name="3" checked-color="#ff00ff" style="float:left;margin:0 10px;"></van-radio>
              <van-radio name="4" checked-color="#07c160" style="float:left;margin:0 10px;"></van-radio>
              <van-radio name="5" checked-color="#ffff00" style="float:left;margin:0 10px;"></van-radio>
              <van-radio name="6" checked-color="#f26717" style="float:left;margin:0 10px;"></van-radio>
              <van-radio name="7" checked-color="#FFC0CB" style="float:left;margin:0 10px;"></van-radio>
            </van-radio-group>
          </div>
          <!-- 配送地址 -->
          <div style="width:100%;height:65px;margin:20px 0;">
            <p style="margin:10px 0;">地址</p>
            <van-cell-group >
              <van-field id="txt" v-model="dizhi" placeholder="请输入配送地址"  style="border:1px solid #cecece" />
            </van-cell-group>
          </div>
        </van-col>
        <van-col span="1"></van-col>
      </van-row>
    </div>
    <!-- 确定按钮 -->
    <div>
      <van-goods-action>
        <van-goods-action-button type="danger" text="确认" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "c_jiemian",
  data() {
    return {
      title: "规格",
      detail: "",
      value: 1,
      active: 0,
      radio: "1",
      dizhi:""
    };
  },
  mounted() {
    var _this = this;

    axios({
      url: "http://jx.xuzhixiang.top/ap/api/detail.php",
      params: { id: _this.$route.params.id }
      //params:{id:price}
    }).then(data => {
      console.log(data.data.data);
      this.detail = data.data.data;
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    add() {
      this.active++;
      if (this.active > 4) {
        this.active = 0;
      }
    },
    onClickButton() {
     var otxt=document.getElementById("txt");
      if(otxt.value==""){
        Toast("请输入地址");
      }else{
        Toast("已成功添加到购物车");
      }
    }
  }
};
</script>
<style scoped>
</style>