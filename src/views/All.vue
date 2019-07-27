<template>
    <div>
        <div>
        <van-nav-bar title="宝宝必备" left-text="返回" left-arrow @click-left="onClickLeft" fixed style="background:#eaeaea;">
        <van-icon name="search" slot="right" />
        </van-nav-bar>
        </div>
        <ul style="">
             <li v-for="(item,i) in list" :key='i' style="width:100%;height::100px;border-radius:20px;font-size:12px;padding:20px;background:#eaeaea;margin-top:1.5rem">
                        <img :src="item.photo" alt="" style="width:121px;height:121px;float:left">
                    <div style="margin-left:140px">
                        <p style="font-size:16px;color:#777676">{{item.name}}</p>
                        <p style="color:#777676">{{item.color}}</p>
                        <p style="text-align:left;color:#777676">会员价：￥{{item.price/100}}</p>
                        <p style="text-align:left;color:#a6a6a6">宝贝亲测:{{item.pingjia}}</p>
                    </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list:[]
        }
    },methods: {
        onClickLeft() {
            this.$router.go(-1)
    },
    },mounted() {
        axios({
            url:'http://106.12.11.4:8888/ShiGuangJi/shiguangji/zhiniao.do'
        }).then((data)=>{
            console.log(data.data.data)
            this.list = data.data.data
        })
    },
}
</script>


<style scoped>
#s{
    position: absolute;
}
</style>
