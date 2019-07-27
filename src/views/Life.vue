<template>
    
        <div style="background:#f2f2f2;height:100vh">
            <div style="height:1.5rem;line-height:1.5rem;">
                 <van-button type="default" to="c_guanzhu">关注</van-button>
                <van-button type="default" to="Community">社区</van-button>
                <van-button type="default" to="Shopping">优品</van-button>
            </div>
        
        <p style="font-size:0.5rem;">关注你感兴趣的人</p>
        
       <div>
           <van-grid :border="false" :column-num="3">
            <van-grid-item v-for="(item,i) in list" :key="i">
                <div id="box" style="border-radius: 50%; overflow: hidden;">
               <van-image :src="item.photo"  style="width:60px;height:60px;"/>
               </div>
                <p style="font-size:12px">{{item.name}}</p>
                <p style="font-size:12px">{{item.detail}}</p>
            </van-grid-item>
            </van-grid>
       </div>
       <button id="gz" @click="zt()">一键关注</button>

       <!-- <van-tabbar v-model="active" active-color="red">
            <van-tabbar-item :to="{name:'index'}">锦囊</van-tabbar-item>
            <van-tabbar-item>生活</van-tabbar-item>
            <van-tabbar-item :to="{name:'home'}">时光记</van-tabbar-item>
            <van-tabbar-item>消息</van-tabbar-item>
            <van-tabbar-item>我的</van-tabbar-item>
        </van-tabbar> -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Life',
    data(){
        return{
            list:[
                {}
            ],
            active: 1,
        }
    },
    
    mounted() {
        axios({
            url:'http://106.12.11.4:8888/ShiGuangJi/shiguangji/life.do',
        }).then((data)=>{
                console.log(data.data.data)
                this.list = data.data.data
    }),
    this.$emit('toparent',this.title)
},methods: {
          zt(){
              this.$router.push("/c_guanzhu")
          }
    },
}
</script>

<style scoped>
    .van-button{
        width:30%;
        height: 1rem;
        line-height: 1rem;
        
    }
    p{
        font-size: 12px;
        background:#f8f8f8;

    }
    #gz{
        width: 150px;
        border: 0;
        border-radius: 20px;
        height: 30px;
        position: relative;
        top: 1rem
    }
</style>
