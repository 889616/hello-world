<template>
    <div>
        <van-nav-bar title="清洁"  left-arrow fixed @click-left="onClickLeft">
         <van-icon name="search" slot="right" />
        </van-nav-bar>
        
        <ul style="margin-top:5rem;">
            <li>
                <van-grid :border="true" :column-num="2">
                <van-grid-item v-for="(item,i) in list" :key="i">
                    <van-image :src="item.photo" />
                    <p style="font-size:12px">{{item.name}}</p>
                    <p style="font-size:12px">会员价￥{{(item.price/100).toFixed(2)}}</p>
                </van-grid-item>
                </van-grid>
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
    },mounted() {
        axios({
            url:'http://106.12.11.4:8888/ShiGuangJi/shiguangji/youpin.do',
        }).then((data)=>{
            console.log(data.data.data)
            this.list = data.data.data
        })
    },methods: {
           onClickLeft() {
      this.$router.go(-1)
      
    },
    },
}
</script>


<style scoped>
  
</style>
