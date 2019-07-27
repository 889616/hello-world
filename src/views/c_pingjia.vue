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
    <div style="margin-top:55px;">
      <van-row>
        <van-col span="1"></van-col>
        <van-col span="22">
          <!-- 评分 -->
          <div style="width：100%;height:20px;font-size:14px;line-height:20px;margin:15px 0">
            <span style="float:left">评分</span>
            <van-rate
              v-model="value"
              allow-half
              void-icon="star"
              void-color="#eee"
              readonly
              style="float:left;margin:0 10px"
            />
            <span style="float:left">99.9%好评</span>
          </div>
          <!-- 全部 有图 追评 差评等 -->
          <div style="font-size:14px;">
            <div
              style="display: flex;justify-content: space-between;width:100%;margin-bottom:15px;height：24px;"
            >
              <span
                style="padding: 0 5px;border:1px solid darkgray;width:28%;text-align:center;background:#cecece"
              >全部 (9999+)</span>
              <span
                style="padding: 0 5px;border:1px solid darkgray;width:28%;text-align:center;"
              >有图 (3564)</span>
              <span
                style="padding: 0 5px;border:1px solid darkgray;width:28%;text-align:center;"
              >追评 (4475)</span>
            </div>
            <div
              style="display: flex;justify-content: space-between;width:100%;margin-bottom:15px;height：24px;"
            >
              <span
                style="padding: 0 5px;border:1px solid darkgray;width:28%;text-align:center;"
              >有效实用 (9)</span>
              <span
                style="padding: 0 5px;border:1px solid darkgray;width:28%;text-align:center;"
              >手感好 (35)</span>
              <span
                style="padding: 0 5px;border:1px solid darkgray;width:28%;text-align:center;"
              >售后好 (44)</span>
            </div>

            <div
              style="display: flex;justify-content: space-between;width:100%;margin-bottom:15px;height：24px;"
            >
              <span
                style="padding: 0 5px;border:1px solid darkgray;width:28%;text-align:center;"
              >差评 (2)</span>
            </div>
          </div>
          <!-- 用户评价 -->
          <!-- 1 -->
          <div style="width:100%;border-top:1px solid #cecece;padding-top:5px;">
            <div style="width：100%;height:40px;margin:10px 0;">
              <van-image
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                style="border-radius:50%;overflow: hidden;float:left;margin-right:10px;"
              />
              <div style="float:left;width:120px;">
                <p>你****说的</p>
                <p>2018.09.17 11:11</p>
              </div>
              <van-rate v-model="value" readonly style="float:left;" size="12px" />
            </div>
            <p style="width:100%;margin:10px 0;">世纪大道是不是不得不说科技的</p>
            <van-image
            width="60"
            height="60"
            :src="detail.pimg"
            style="margin-bottom:10px"
            />
            <p style="width:100%;min-height:56px;border:1px solid #cecece;line-height:30px;font-size：14px;margin-bottom:10px;border-radius:5px;">水电费水电费是的发送到发送到士大懂Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nulla adipisci aliquid? Excepturi earum, quia fugiat optio quasi voluptas animi, est illo, quos autem nobis! Tenetur impedit at dicta doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet dicta quis asperiores, neque expedita voluptates eligendi, corrupti atque, ullam ad commodi provident nulla quo inventore nihil magni! Esse, voluptates?</p>
          </div>
          <!-- 2 -->
            <div style="width:100%;border-top:1px solid #cecece;padding-top:5px;">
            <div style="width：100%;height:40px;margin:10px 0;">
              <van-image
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                style="border-radius:50%;overflow: hidden;float:left;margin-right:10px;"
              />
              <div style="float:left;width:120px;">
                <p>你****说的</p>
                <p>2018.09.17 11.11</p>
              </div>
              <van-rate v-model="value" readonly style="float:left;" size="12px" />
            </div>
            <p style="width:100%;margin:10px 0;">世纪大道是不是不得不说科技的</p>
            <van-image
            width="60"
            height="60"
            :src="detail.pimg"
            style="margin-bottom:10px"
            />
            <p style="width:100%;min-height:56px;border:1px solid #cecece;line-height:30px;font-size：14px;margin-bottom:10px;border-radius:5px;">水电费水电费是的发送到发送到士大懂</p>
          </div>
        </van-col>
        <van-col span="1"></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "c_pingjia",
  data() {
    return {
      title: "评价",
      detail: "",
      value: 4.5
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
    }
  }
};
</script>
<style scoped>
</style>