<template>
  <div class="hander">
    <div style="margin-top:1rem; " align="center">
      <img
        alt="用户头像"
        src="http://img5.imgtn.bdimg.com/it/u=1678839549,2753634666&fm=26&gp=0.jpg"
  
        style="width:3.31rem;height:3.31rem;border-radius:50%;margin-bottom:1rem;"
      />
      <van-row type="flex" justify="space-around">
        <van-col span="9">
          <!-- <van-tag plain size="medium" text-color="black">宝宝</van-tag> -->
          <p>{{this.$store.state.babyName}}</p>
        </van-col>
        <van-col span="9">
          <!-- <van-tag plain size="medium">宝宝已经{{days}}天</van-tag> -->
          <p>宝宝已经{{this.$store.state.babyAges}}天</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>


<script >
export default {
  data() {
    return {
      days: 130
    };
  }
};
</script>


<style scoped>
.hander {
  margin-top: 2.51rem;
  /* width: 23.44rem; */
  height: 8rem;
  line-height: 1.25rem;
  background-color: rgb(214, 16, 16);
  text-align: center;
  border: 0.06px solid rgba(255, 255, 255, 0);
}
p {
  background-color: aliceblue;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 0.5rem;
}
</style>

