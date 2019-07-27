<template >
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="thr">
      <div class="swiper-slide" v-for="(item,index) in carts" :key="index">
        <h3 style="height:1rem;line-height:1.5rem;font-size:0.6rem">{{item.title}}</h3>
        <div style="height:7rem; padding:0.5rem">
          <img :src="item.photo" style="width:100%; margin:0 auto;border-radius: 0.4rem;" />
        </div>
        <hr />
        <div>
          <p style="font-size:0.5rem;padding:0.1rem;margin-top:0.5rem">{{item.detail}}</p>
        </div>
      </div>
    </swiper>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "carrousel",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1
      },
      carts: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  },
  methods: {},
  mounted() {
    axios
      .get("http://106.12.11.4:8888/ShiGuangJi/shiguangji/achievement.do")
      .then(res => {
        console.log(res.data);
        this.carts = res.data.data;
      })
      .catch(function(error) {
        alert("数据出错");
      });
  }
};
</script>


<style scoped>
/* .swiper-container .swiper-wrapper .swiper-slide {
  width: 16.31rem;
  border-radius: 0.12rem;
} */

.swiper-container {
  margin-top: 0.2rem;
  width: 80%;
  overflow: visible !important;
  position: fixed;
  margin-left: 1rem;
}
.swiper-slide-img {
  margin: 0 auto;
}
.swiper-slide {
  border-radius: 0.4rem;
  overflow: hidden;
  width: 16.31rem;
  height: 15rem;
  background-color: rgba(212, 44, 44, 0.3);
}

.swiper-slide-prev {
  margin-top: 0.5rem;
  right: 5%;
  height: 15rem !important;
}

.swiper-slide-next {
  margin-top: 0.5rem;
  left: 5%;
  height: 15rem !important;
}

/* .swiper-slide-active {
  width: 2rem;
} */

.swiper-pagination {
  bottom: 0.1rem !important;
}
/* .thr {
  position: fixed;
} */
</style>