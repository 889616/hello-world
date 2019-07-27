<template>
  <div>
    <van-nav-bar
      title="成长记录"
      left-text="返回"
      right-text="添加"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-tabs swipeable>
      <van-tab title="记录列表">
        <ul id="rdata">
          <li v-for="(item,index) in babyData" :key="index" class="lisn">
            <p>{{item.date}}</p>
            <p>{{item.status}}</p>
            <p>
              <span>身高：{{item.hight}}CM</span>
              <span style="margin-left: 3rem;">体重：{{item.weight}}KG</span>
            </p>
            <p>头围：{{item.head}}KG</p>
          </li>
        </ul>
      </van-tab>
      <van-tab title="身高曲线">
        <SgEcharts></SgEcharts>
      </van-tab>
      <van-tab title="体重曲线">
        <WeightEcharts></WeightEcharts>
      </van-tab>
      <van-tab title="头围曲线">
        <HeadEcharts></HeadEcharts>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
import SgEcharts from "@/components/SgEcharts.vue";
import WeightEcharts from "@/components/WeightEcharts.vue";
import HeadEcharts from "@/components/HeadEcharts.vue";

export default {
  name: "babycare",
  components: {
    SgEcharts,
    WeightEcharts,
    HeadEcharts
  },
  data() {
    return {
      babyData: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    onLoad() {
      // 异步更新数据
    }
  },
  mounted() {
    axios
      .get("http://106.12.11.4:8888/ShiGuangJi/shiguangji/growup.do")
      .then(res => {
        // console.log(res.data.data);
        this.babyData = res.data.data;
      })
      .catch(function(error) {
        alert("数据出错");
      });
  }
};
</script>

<style scoped>

 #rdata p {
  margin: 0;
  padding: 0;
  float: left;
  margin-left: 1rem;
  margin-top: 0.3rem;
  font-size: 0.45rem
  
}
ul {
  list-style: none;
}
.lisn {
  left: 0.19rem;
  top: 1rem;
  /* width: 23.06rem; */
  width: 100%;
  height: 6.88rem;
  line-height: 1.25rem;
  border-radius: 0.75rem;
  background-color: rgba(227, 227, 227, 1);
  text-align: center;
  border: 0.06px solid rgba(255, 255, 255, 0);
  margin-bottom: 0.2rem;
}
</style>
