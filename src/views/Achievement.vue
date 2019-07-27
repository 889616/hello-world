<template >
  <div>
    <van-nav-bar
      title="成就"
      left-text="返回"
      right-text="全部"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <ThreeDCart></ThreeDCart>
  </div>
</template>

<script>
import ThreeDCart from "@/components/ThreeDCart.vue";
export default {
  name: "achievement",
  data() {
    return {};
  },
  components: {
    ThreeDCart
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "home" });
    },
    onClickRight() {
      this.$router.push({ name: "allpicture" });
    }
  }
};
</script>

