<template>
  <div>
    <van-nav-bar title="全部" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="wai">
      <div v-for="(item,id) in arrimg" :key="id" class="list">
        <img v-bind:src="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allpicture",
  data() {
    return {
      imgs: "",
      arrimg: [
        {
          url:
            "http://img2.imgtn.bdimg.com/it/u=2677267877,4177717177&fm=26&gp=0.jpg",
          name: "one"
        },
        {
          url:
            "http://img2.imgtn.bdimg.com/it/u=2677267877,4177717177&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img2.imgtn.bdimg.com/it/u=2677267877,4177717177&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img2.imgtn.bdimg.com/it/u=2677267877,4177717177&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img2.imgtn.bdimg.com/it/u=2677267877,4177717177&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img2.imgtn.bdimg.com/it/u=2677267877,4177717177&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "achievement" });
    }
  }
};
</script>



<style scoped>
.wai {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.list {
  width: 6rem;
  height: 6rem;
  margin-top: 2rem;
  background-color: gray;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
.list img {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}
</style>
