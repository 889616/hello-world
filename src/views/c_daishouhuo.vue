<template>
  <div >
    <baidu-map class="map" center="郑州">
        </baidu-map>
      <van-icon name="arrow-left" @click="todo()" style="position:absolute;top:20px;left:20px;" size="22px"/>
      
    <div style="position: absolute;top:170px;left:0;">
      <div style="width:100%;">
        <van-row type="flex" justify="center">
          <van-col span="1"></van-col>
          <van-col span="22">
            <!-- 联系配送员 -->
            <div
              style="background:#f2f2f2;border-radius:8px;position: relative;height:160px;display:flex;flex-direction: column;align-items:center;"
            >
              <div
                style="width:80px;height:80px;background:#fff;border:1px solid #f00;line-height:80px;text-algin:center;border-radius:50%;font-size:12px;position: absolute;top:-40px"
              >已用时{{sj}}小时</div>
              <div style="position:absolute;top:45px;">
                <p style="margin:5px 0;text-align:center">预计{{yuji}}送达</p>
                <p style="margin:5px 0;text-align:center">配送员 {{psy}} 正在配送</p>
                <p style="margin:5px 0;text-align:center;margin-top:20px;">
                  <van-button disabled round type="default" style="height:30px;line-height:30px;">取消订单</van-button>
                  <van-button round type="default" style="margin:0 5px;height:30px;line-height:30px;">联系配送员</van-button>
                  <van-button round type="default" style="height:30px;line-height:30px;">催单</van-button>
                </p>
              </div>
            </div>
            <!-- 商品信息 -->
            <div style="padding:0 20px;background:#f2f2f2;border-radius:8px;">
              <p style="margin:10px 0;height:40px;line-height:40px;font-size:16px;">商品信息</p>
              <van-grid :border="false" :column-num="3" style="margin:10px 0">
                <van-grid-item>
                  <van-image :src="list[0].pimg" @click="tap(list[0].pid)"/>
                </van-grid-item>
                <van-grid-item>
                  <van-image :src="list[1].pimg" @click="tap(list[1].pid)"/>
                </van-grid-item>
                <van-grid-item>
                  <van-image :src="list[2].pimg" @click="tap(list[2].pid)"/>
                </van-grid-item>
              </van-grid>
              <p style="width:100%;height:30px;font-size:14px;line-height:30px;">
                <span style="float: left;">商品总价</span>
                <span style="float: right;">￥{{price}}</span>
              </p>
              <p style="width:100%;height:30px;font-size:14px;line-height:30px;">
                <span style="float: left;">配送费</span>
                <span style="float: right;">免运费</span>
              </p>
              <p style="width:100%;height:30px;font-size:14px;line-height:30px;">
                <span style="float: left;">运险费</span>
                <span style="float: right;">卖家赠送</span>
              </p>
              <p style="width:100%;height:40px;line-height:40px;font-size:18px">
                <span style="float: right;">总价&nbsp;￥{{price}}</span>
              </p>
            </div>
            <!-- 订单信息 -->
            <div style="padding:0 15px;background:#f2f2f2;border-radius:8px;">
              <p style="margin:10px 0;height:35px;line-height:35px;font-size:16px;">订单信息</p>
              <p style="width:100%;height:25px;font-size:14px;">
                <span style="float: left;">订单号</span>
                <span style="float: right;">{{ddh}}</span>
              </p>
            </div>
          </van-col>
          <van-col span="1"></van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "c_daishouhuo",
  data() {
    return {
      title: "",
      sj: "48",
      psy: "张师傅",
      yuji: "明天",
      price: "79.9",
      ddh: "211245435345",
      list:"",

    };
  },
  mounted() {
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 16761 }
    }).then(data => {
      console.log(data.data.data);
      this.list=data.data.data;
    });
  },
  methods: {
     todo(){
          this.$router.go(-1)
      },
      tap(id){
        this.$router.push("/c_xiangqing/" + id)
      }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
 
}
.map{
        width: 100%;
        height: 230px;
        
    }

</style>