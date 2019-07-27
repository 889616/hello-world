<template>
  <div>
    <van-nav-bar
      title="相册"
      left-text="返回"
      right-text="添加"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <WaterFall></WaterFall>
  </div>
</template>

<script>
import WaterFall from "../components/WaterFall";
export default {
  name: "dicm",
  components: {
    WaterFall
  },
  methods: {
    onClickLeft() {
      // this.$router.go(-1);
      this.$router.push({ name: "home" });
    },
    onClickRight() {
      this.$router.push({ name: "topicture" });
    }
  }
};
</script>

