<template>
  <div>
    <van-nav-bar
      left-text="返回"
      right-text="完成"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-uploader v-model="fileList" :after-read="afterRead" multiple="ture" :max-count="5"></van-uploader>
  </div>
</template>

<script>
export default {
  name: "topicture",
  data() {
    return {
      fileList: []
    };
  },
  methods: {
 
    afterRead(file) {
      console.log(this.fileList);
    },
    onClickLeft() {
      this.$router.push({ name: "dcim" });
    },
    onClickRight() {
      alert("完成");
    }
  }
};
</script>