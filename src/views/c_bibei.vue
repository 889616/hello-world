<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar :title="title" left-text="返回" left-arrow fixed style="height:55px;line-height:55px" @click="tzm()">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div class="bj" >
        <ul >
        <!-- 1 -->
            <li style="width:100%-40px;height:110px;border:1px solid #cecece;background:#fff;padding:20px;line-height:25px;border-radius:10px;margin-bottom:20px;position: relative;background:#f2f2f2;" v-for="(item,index) in list" v-bind:key="index" @click="tz(item.id)">
                <img :src="item.photo" style="border:1px solid #cecece;width:111px;height:108px;float:left;">
                <div  style="float:left;margin-left:15px">
                    <p style="height:25px;font-size:16px;">{{item.name}}</p>
                    <p style="height:25px;font-size:16px;">{{item.caizhi}}</p>
                    <p style="height:25px;font-size:12px;">会员价: ￥{{item.price}}</p>
                    <p style="height:25px">{{item.color}}</p>
                </div>
                <span style="position: absolute;top:3px;left:3px;width:28px;height:28px;border:1px solid #cecece;border-radius:50%;text-align:center;line-height:28px;background:#fff;">1</span>               
            </li>
            <!-- 2 -->
            <!-- <li style="width:100%-40px;height:110px;border:1px solid #cecece;background:#fff;padding:20px;line-height:25px;border-radius:10px;margin-bottom:20px;position: relative;background:#f2f2f2;" v-for="(item,index) in list" v-bind:key="index" @click="tz(item.id)">
                <img :src="item.photo" style="border:1px solid #cecece;width:111px;height:108px;float:left;">
                <div  style="float:left;margin-left:15px">
                    <p style="height:25px;font-size:16px;">{{item.name}}</p>
                    <p style="height:25px;font-size:16px;">{{item.caizhi}}</p>
                    <p style="height:25px;font-size:12px;">会员价: ￥{{item.price}}</p>
                    <p style="height:25px">{{item.color}}</p>
                </div>
                <span style="position: absolute;top:3px;left:3px;width:28px;height:28px;border:1px solid #cecece;border-radius:50%;text-align:center;line-height:28px;background:#fff;">1</span>               
            </li> -->
            <!-- 3 -->
            <!-- <li style="width:100%-40px;height:110px;border:1px solid #cecece;background:#fff;padding:20px;line-height:25px;border-radius:10px;margin-bottom:20px;position: relative;background:#f2f2f2;" v-for="(item,index) in list" v-bind:key="index" @click="tz(item.id)">
                <img :src="item.photo" style="border:1px solid #cecece;width:111px;height:108px;float:left;">
                <div  style="float:left;margin-left:15px">
                    <p style="height:25px;font-size:16px;">{{item.name}}</p>
                    <p style="height:25px;font-size:16px;">{{item.caizhi}}</p>
                    <p style="height:25px;font-size:12px;">会员价: ￥{{item.price}}</p>
                    <p style="height:25px">{{item.color}}</p>
                </div>
                <span style="position: absolute;top:3px;left:3px;width:28px;height:28px;border:1px solid #cecece;border-radius:50%;text-align:center;line-height:28px;background:#fff;">1</span>               
            </li> -->
            <!-- 4 -->
            <!-- <li style="width:100%-40px;height:110px;border:1px solid #cecece;background:#fff;padding:20px;line-height:25px;border-radius:10px;margin-bottom:20px;position: relative;background:#f2f2f2;" v-for="(item,index) in list" v-bind:key="index" @click="tz(item.id)">
                <img :src="item.photo" style="border:1px solid #cecece;width:111px;height:108px;float:left;">
                <div  style="float:left;margin-left:15px">
                    <p style="height:25px;font-size:16px;">{{item.name}}</p>
                    <p style="height:25px;font-size:16px;">{{item.caizhi}}</p>
                    <p style="height:25px;font-size:12px;">会员价: ￥{{item.price}}</p>
                    <p style="height:25px">{{item.color}}</p>
                </div>
                <span style="position: absolute;top:3px;left:3px;width:28px;height:28px;border:1px solid #cecece;border-radius:50%;text-align:center;line-height:28px;background:#fff;">1</span>               
            </li> -->
        </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "c_bibei",
  data() {
    return {
      title: "宝宝必备",
      list:"",
    };
  },methods: {
    tzm() {
      this.$router.push('/c_wode');
    },
    tz(id){
      this.$router.push("c_xiangqing/"+id)
    }
  },
  mounted() {
    axios({
      url: "http://106.12.11.4:8888/ShiGuangJi/shiguangji/zhiniao.do",
      //params: { uid: 16761 }
    }).then(data => {
      console.log(data.data.data);
      this.list=data.data.data;
    });
  },
  
};
</script>
<style scoped>
.bj {
  background: url("../assets/12.jpg") no-repeat;
  width: 100%-20px;
  background-size: 100% 240px;
  padding: 185px 10px 0;

}
*{
    margin: 0;
    padding: 0;
    
    
    
}
</style>