<template>
  <div style="margin-top:9.5rem;margin-bottom: 2rem;" align="center">
    <img v-for="(img,index) in imageList" v-lazy="img.photo" :key="index" class="imgs" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "sgjtree",
  data() {
    return {
      imageList: []
    };
  },

  mounted() {
    // console.log(456);
    axios
      .get("http://106.12.11.4:8888/ShiGuangJi/shiguangji/yunphoto.do")
      .then(res => {
        // console.log(res.data.data);
        this.imageList = res.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.imgs {
  /* width: 8rem; */
  height: 6rem;
  border-radius: 0.4rem;
  margin-top: 0.3rem;
  background-color: rgb(211, 209, 209);
  padding: 0.5rem;
}
.van-imge {
  border-radius: 50%;
}
</style>
