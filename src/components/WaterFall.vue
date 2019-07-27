<template>
  <div class="container-water-fall">
    <waterfall
      :col="col"
      :width="itemWidth"
      :gutterWidth="gutterWidth"
      :data="imageData"
      @loadmore="loadmore"
      @scroll="scroll"
    >
      
        <div class="cell-item" v-for="(item,index) in imageData" :key="index">
          <img v-if="item.photo" :src="item.photo" alt="加载错误" @click="dscr(item.photo,item.babyName,item.story)" />
          <!--<img v-if="item.img" :lazy-src="item.img" alt="加载错误"  />   //lazy-src 懒加载 -->
          <div class="item-body">
            <div class="item-desc">{{item.babyName}}</div>
           
          </div>
        </div>
   
    </waterfall>

    <van-dialog v-model="show" :title="this.story" style="height:10rem">
      <img :src="this.imgs" style="width:100%;height:5rem" />
    </van-dialog>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      imageData: [],
      col: 2,
      itemWidth: 0,
      gutterWidth: 0,
      show: false,
			imgs:"",
			story:""
    };
  },

  methods: {
    scroll(scrollData) {
      // console.log(scrollData);
    },
    loadmore(index) {
      // this.data = this.data.concat(this.data);
    },
    dscr(a,b,c) {
      this.show = true;
			this.imgs=a;
			this.story=c;
    }
  },
  mounted() {
    // console.log(456);
    axios
      .get("http://106.12.11.4:8888/ShiGuangJi/shiguangji/yunphoto.do")
      .then(res => {
        console.log(res.data.data);
        this.imageData = res.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>


<style scoped>
.cell-item {
  padding: 0.2rem;
}
.cell-item img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
</style>




