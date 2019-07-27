<template>
    <div>
        <div style="background:#eaeaea;height:5rem;">
        <van-nav-bar fixed title="社区" left-text="返回" left-arrow style="background:#eaeaea;" @click-left="onClickLeft">
            <van-icon name="search" slot="right"/>
        </van-nav-bar>
        </div>
<van-row gutter="1">
  <van-col span="4">
      <div>
          <img src="http://img4.imgtn.bdimg.com/it/u=1830388552,1230406038&fm=26&gp=0.jpg" alt="" style="width:50px;height:50px;border-radius: 50%;">
      </div>
      <p>备孕</p>
 </van-col>
 <van-col span="5">
      <div>
          <img src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2879174969,1466757023&fm=26&gp=0.jpg' alt="" style="width:50px;height:50px;border-radius: 50%">
      </div>
      <p>孕期</p>
 </van-col>
  <van-col span="5">
      <div>
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2582355980,2361872205&fm=26&gp=0.jpg" alt="" style="width:50px;height:50px;border-radius: 50%">
    </div>
    <p>育儿</p>
 </van-col>
  <van-col span="5">
      <div>
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1842766985,3447939597&fm=26&gp=0.jpg" alt="" style="width:50px;height:50px;border-radius: 50%">
          </div>
          <p>家常</p>
    </van-col>
      <van-col span="5">
      <div>
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3516137656,1268971568&fm=26&gp=0.jpg" alt="" style="width:50px;height:50px;border-radius: 50%">
    </div>
    <p>旅行</p>
 </van-col>

</van-row>
    

        <ul>
          <li style="width：100%;height:410px;margin-bottom:20px;padding:14px 14px 0;background:#eaeaea;text-align:left" v-for='(item,i) in list'>
        <div style="width:100%;height:50px;margin:15px 0;">
          <van-image
            width="50"
            height="50"
            :src="item.photo"
            style="border-radius:50%;overflow: hidden;float:left;margin-right:10px;"
          />
          <div style="float:left;width:89px;">
            <p style="margin-bottom:10px;font-size:12px">{{item.name}}</p>
           
            <span style="font-size:12px">{{item.detail}}</span>
          </div>
        </div>
        <div style="margin-top:15px;text-align:left">
          <p style="max-height:80px;width:100%;font-size:14px;overflow: hidden;">{{item.note}}</p>
          <p style="margin:15px 0;color:#00f">全文</p>
          <img :src="item.photo" style="height:175px;width:100%" />
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
import axios from 'axios';
export default {
    data(){
        return{
            value:0,
            pf:998,
            list:[]
        }
    },
    mounted() {
        
         axios({
            url:'http://106.12.11.4:8888/ShiGuangJi/shiguangji/yuer.do',
            params:{uid:16761}
        }).then((data)=>{
                console.log(data.data.data)
                this.list = data.data.data
    }),
    this.$emit('toparent',this.title)
    
    },methods: {
         onClickLeft() {
      this.$router.go(-1)
      
    },
    },
}
</script>
    
<style scoped>

</style>
