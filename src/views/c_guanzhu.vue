<template>
  <div>
    <!-- 头部导航 -->
    <div style="width:100%;height:42px;padding-top:13px;text-align:center;position: absolute;top:0;left:0;">
      <van-button
        type="default"
        style="height:25px;line-height:25px;width:95px;background:#cecece" to="c_guanzhu">关注</van-button>
      <van-button type="default" style="height:25px;line-height:25px;width:95px;" to="Community">社区</van-button>
      <van-button type="default" style="height:25px;line-height:25px;width:95px;" to="Shopping">优品</van-button>
    </div>
    <ul style="margin:55px 0 50px;overflow:auto;">
      <li style="width：100%;height:410px;margin-bottom:20px;padding:14px 14px 0;background:#cecece;">
        <div style="width:100%;height:50px;margin:15px 0;">
          <van-image
            width="50"
            height="50"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            style="border-radius:50%;overflow: hidden;float:left;margin-right:10px;"
          />
          <div style="float:left;width:120px;">
            <p style="margin-bottom:10px;">vivi宝宝妈妈</p>
            <span  style="margin-right:10px;">3秒前</span>
            <span>宝宝两岁</span>
          </div>
        </div>
        <div style="margin-top:15px;">
          <p style="max-height:80px;width:100%;font-size:14px;overflow: hidden;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad alias totam explicabo consectetur rerum, fuga asperiores, enim sint sapiente labore optio ullam dolorem ratione officiis vitae cum esse voluptas!LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad alias totam explicabo consectetur rerum, fuga asperiores, enim</p>
          <p style="margin:15px 0;color:#00f">全文</p>
          <img src="../assets/0.jpg" style="height:175px;width:100%" />
        </div>
        <div style="height:20px;line-height:20px; display: flex;justify-content: space-around">
          <span>分享</span>
          <span>评论</span>
          <span style="float:right;margin-right:10px;line-height:20px;height:20px;">
            {{pf}}
             <van-rate
              v-model="value"
              color="#f00"
              icon="like"
              void-icon="like-o"
              :count="1"
              style="float:left;margin-right:3px;height:20px;"
              change
            />
            </span>  
          
        </div>
      </li>

      <!-- 2 -->
       <li style="width：100%;height:410px;margin-bottom:20px;padding:14px 14px 0;background:#cecece;">
        <div style="width:100%;height:50px;margin:15px 0;">
          <van-image
            width="50"
            height="50"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            style="border-radius:50%;overflow: hidden;float:left;margin-right:10px;"
          />
          <div style="float:left;width:120px;">
            <p style="margin-bottom:10px;">vivi宝宝妈妈</p>
            <span  style="margin-right:10px;">3秒前</span>
            <span>宝宝两岁</span>
          </div>
        </div>
        <div style="margin-top:15px;">
          <p style="max-height:80px;width:100%;font-size:14px;overflow: hidden;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad alias totam explicabo consectetur rerum, fuga asperiores, enim sint sapiente labore optio ullam dolorem ratione officiis vitae cum esse voluptas!LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad alias totam explicabo consectetur rerum, fuga asperiores, enim</p>
          <p style="margin:15px 0;color:#00f">全文</p>
          <img src="../assets/0.jpg" style="height:175px;width:100%" />
        </div>
        <div style="height:20px;line-height:20px; display: flex;justify-content: space-around">
          <span>分享</span>
          <span>评论</span>
          <span style="float:right;margin-right:10px;line-height:20px;height:20px;">
            {{pf}}
             <van-rate
              v-model="value"
              color="#f00"
              icon="like"
              void-icon="like-o"
              :count="1"
              style="float:left;margin-right:3px;height:20px;"
              change
            />
            </span>  
          
        </div>
      </li>


    </ul>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "c_guanzhu",
  data() {
    return {
      title: "",
      pf:"998",
      value:0,
    };
  },
  mounted() {
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 16761 }
    }).then(data => {
      console.log(data.data.data);
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    change(){
      this.pf=this+this.value;
    }
  }
};
</script>
<style scoped>

</style>