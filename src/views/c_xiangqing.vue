<template>
  <div>
    <van-nav-bar :title="title" fixed left-text="返回" left-arrow @click-left="onClickLeft" />
    <div id="inner">
       <div>
        <swiper  style="width:100%;height:295px;">
                    <swiper-slide ><img :src="detail.pimg" alt=""></swiper-slide>
                     <swiper-slide ><img :src="detail.pimg" alt=""></swiper-slide>
                      <swiper-slide ><img :src="detail.pimg" alt=""></swiper-slide>
　　　　<div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <van-row>
        <van-col span="2"></van-col>
        <van-col span="20">
          <!-- <div style="width:100%;height:295px;border-radius:8px;overflow: hidden;">
            <van-image width="100%" height="100%" :src="detail.pimg" style="border" />
          </div> -->

          <p style="width:100%;text-align: center;font-size:20px;">{{detail.pname}}</p>
          <!-- 价格  好评  会员价 -->
          <div style="width:100%;text-align: center;font-size:14px;margin:10px 0">
            <span
              style="border-radius:10px;padding: 0 10px;border:1px solid #cecece;margin:0 10px"
            >￥{{parseInt(detail.pprice/100)}}</span>
            <span
              style="border-radius:10px;padding: 0 10px;border:1px solid #cecece;margin:0 10px"
            >好评{{parseInt(detail.pprice/1000)}}%</span>
          </div>
          <div style="width:100%;text-align: center;font-size:14px;margin:10px 0">
            <span
              style="border-radius:10px;padding: 0 20px;border:1px solid #cecece;background:#f2f2f2"
            >会员价：￥{{parseInt(detail.pprice/1000)}}</span>
          </div>
          <!-- 设计者 材质 -->
          <div
            style="font-size:12px;width:100%-20px;height:50px;border-radius:8px;border:1px solid #cecece;padding:0 10px"
          >
            <div style="line-height:25px;">
              <span style="float:left">设计者：第三方覆盖</span>
              <span style="float:right">材质：100%纯棉</span>
            </div>
            <div style="line-height:25px;">
              <span style="float:left">颜色：浅蓝,浅粉,浅绿</span>
              <span style="float:right">适龄期：3~5岁宝宝</span>
            </div>
          </div>
          <!-- 评价 规格 -->
          <div style="width:100%;margin:10px 0;height:44px">
            <van-button
              type="default"
              style="width:40%;margin:0 10px;float:left;border-radius:8px;height:34px;line-height:34px;"
              @click="top()"
            >评价</van-button>
            <van-button
              type="default"
              style="width:40%;margin:0 10px;float:right;border-radius:8px;height:34px;line-height:34px;"
              @click="tap()"
            >规格</van-button>
          </div>

          <!-- 妈妈记录语 -->
          <div
            style="font-size:12px;width:100%-20px;height:54px;border-radius:8px;border:1px solid #cecece;padding:0 10px;line-height:27px;"
          >
            <p style="">{{detail.pname}}</p>
            <p style="">{{detail.pname}}</p>
          </div>
        </van-col>
        <van-col span="2"></van-col>
      </van-row>
     
    </div>
<!-- v-for="(item,i) in detail" :key="i" -->
    <van-goods-action>
      <van-goods-action-icon
      icon="chat-o"
      text="客服"
      @click="onClickIcon"
      />
      <van-goods-action-icon
      icon="cart-o"
      text="购物车"
      @click=" onClickButton"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="tpp()"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="tap()"
      />
    </van-goods-action>
  </div>
</template>

<script>




import { Toast } from "vant";
import axios from "axios";
export default {
  name: 'c_xiangqing',
  data() {
    return {
      detail: "",
      title: "详情",
      swiperOption: {
　　　　　　　　autoplay: 3000,  //l轮播间隔时间
　　　　　　　　loop: true,　　//是否自动轮播
　　　　　　　　pagination : '.swiper-pagination', //轮播图中下标点显示
　　　　　　　　paginationClickable :true　　 //轮播图中下标点显示
　　　}
    };
  },
  mounted() {
    var _this = this;

    axios({
      url: "http://jx.xuzhixiang.top/ap/api/detail.php",
      params: { id: _this.$route.params.id }
      //params:{id:price}
    }).then(data => {
      //console.log(data.data.data)
      this.detail = data.data.data;
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickIcon() {
      //Toast("点击图标");
      this.$router.push("/c_xiaoxi")
    },
    onClickButton() {
       this.$router.push("/c_ShoppingCart");
    },
    tap() {
      var gid = this.$route.params.id;
      this.$router.push("/c_guige/" + gid);
    },
    top() {
      var gid = this.$route.params.id;
      this.$router.push("/c_pingjia/" + gid);
    },
    tpp() {
      var gid = this.$route.params.id;
      this.$router.push("/c_jiemian/" + gid);
    }
  }
};
</script>

<style scoped>
#inner {
  margin-top: 46px;
  margin-bottom: 50px;
  overflow: auto;
}
* {
  margin: 0;
  padding: 0;
}
</style>