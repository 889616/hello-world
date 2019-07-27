<template>
  <div>
    <van-nav-bar title="亲友团" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item">
        <div style="height:3rem;text-align: start;">
          <img
            src="http://img5.imgtn.bdimg.com/it/u=3780366653,80281086&fm=26&gp=0.jpg"
            style="float:left;"
            alt
          />
          <span style="display: inline-block;line-height: 2rem;margin-left:0.5rem;font-size:1rem">123</span>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "missionfriends",
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 5) {
          this.finished = true;
        }
      }, 500);
    }
  },
  mounted() {}
};
</script>

<style scoped>
img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  /* margin-left: -20rem; */
}
</style>

