<template>
    <div>
        <div style="background:#eaeaea;">
        <van-nav-bar title="社区" left-text="返回" fixed left-arrow style="background:#eaeaea;" @click-left="onClickLeft">
            <van-icon name="search" slot="right"/>
        </van-nav-bar>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" style="height:200px;width:100%" ></van-swipe-item>
            <van-swipe-item><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" style="height:200px;width:100%"></van-swipe-item>
            <van-swipe-item><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" style="height:200px;width:100%"></van-swipe-item>
            <van-swipe-item><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" style="height:200px;width:100%"></van-swipe-item>
        </van-swipe>
        <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
        />
        <van-popup v-model="showList" position="bottom">
        <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
        />
        </van-popup>
        <van-row gutter="20">
  <van-col span="6">
       <div @click="tap()">
          <img src="http://ku.90sjimg.com/element_pic/18/04/04/3ae1b20dae3a9f0105336ace7cc9fd09.jpg" style="width:50px;height:50px;border-radius: 50%">
          <p>清洁</p>
      </div>
 </van-col>
 <van-col span="6" >
      <div @click="tap()">
          <img src='http://img.zcool.cn/community/01d177553b5b0b0000002561628382.jpg@1280w_1l_2o_100sh.jpg' alt="" style="width:50px;height:50px;border-radius: 50%">
         <p>喂养</p>
      </div>
 </van-col>
  <van-col span="6">
      <div  @click="tap()">
          <img src="http://imgsa.baidu.com/exp/w=500/sign=8a9571ed7f3e6709be0045ff0bc69fb8/34fae6cd7b899e5122a0b7de42a7d933c9950dc9.jpg" alt="" style="width:50px;height:50px;border-radius: 50%">
    </div>
    <p>童装</p>
 </van-col>
  <van-col span="6">
      <div  @click="tap()">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1842766985,3447939597&fm=26&gp=0.jpg" alt="" style="width:50px;height:50px;border-radius: 50%">
          </div>
          <p>更多</p>
    </van-col>
</van-row>

        <van-cell-group>
  <van-cell title="宝宝必备" value="all" @click="all()"/>
</van-cell-group>

        <div>
           <van-grid :border="false" :column-num="3">
            <van-grid-item v-for="(item,i) in list" :key="i">
               <van-image :src="item.photo"  style="width:60px;height:60px;"/>             
                <p style="width:80px;margin:0;overflow:hidden">{{item.name}}</p>
                <p style="width:80px;margin:0;font-size:12px;">￥{{(item.price/100).toFixed(2)}}</p>
            </van-grid-item>
            </van-grid>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
             chosenCoupon: -1,
             coupons: [coupon],
             disabledCoupons: [coupon],
             showList:'',
             list:[],
             showList:false
        }
    },methods: {
         onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },

    onClickLeft() {
      this.$router.go(-1)
    },tap(){
        this.$router.push('/List')
    },all(){
        this.$router.push('/All')
    }
    },mounted() {
         axios({
            url:'http://106.12.11.4:8888/ShiGuangJi/shiguangji/youpin.do',
           
        }).then((data)=>{
                console.log(data.data.data)
                this.list = data.data.data
    }),
    this.$emit('toparent',this.title)
    },
}
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
</script>

<style scoped>
</style>
