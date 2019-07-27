<template>
  <div>
    <van-nav-bar
    fixed
      :title="biaoti"
      left-text="退出登录"
      right-text="设置"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="wd-nav"
      style="height:55px;line-height:55px;"
    />
    <div id="wd-tx">
      <div id="yuan">
        <van-image
          width="90"
          height="90"
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3892770115,2426302355&fm=26&gp=0.jpg"
          style="border-radius:50%;overflow: hidden;"
        />
      </div>

      <div id="p2">
        
       <!-- <p style="text-align:center;margin:10px 0;font-size:22px;">{{this.$store.state.name}}</p> -->
        <p style="text-align:center;font-size:12px;margin:10px 0;">{{tot}}</p>
      </div>
    </div>

    <van-row class="user-links">
      <van-col span="12">
        <van-icon name="tosend" />关注
      </van-col>
      <van-col span="12">
        <van-icon name="send-gift-o" />粉丝
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="circle" title="会员中心" is-link to="/c_huiyuan" />
    </van-cell-group>

    <van-cell-group class="user-group">
      <van-cell icon="circle" title="制作相册" is-link to="/c_xiangce" />
      <van-cell icon="circle" title="我的收藏" is-link to="/c_shoucang" />
    </van-cell-group>
    <van-cell-group>
      <van-cell icon="circle" title="购物车" is-link to="/c_ShoppingCart" />
      <van-cell icon="circle" title="我的订单" is-link to="/c_dingdan" />
      <van-cell icon="circle" title="优惠券" is-link to="/c_youhuijuan" />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
import { Toast } from "vant";
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "c_wode",
  data() {
    return {
      title: "时光记",
      tot: "生活达人",
      biaoti: "我的"
    };
  },
  methods: {
    onClickLeft() {
      this.$store.state.name="";
      this.$router.push('/login')
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style scoped>

  .user-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  .user-group {
    margin-bottom: 15px;
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background: #f2f2f2;
    margin: 0 10px;
    overflow: hidden;
    border-radius: 10px;
    
  }
.van-icon {
      display: block;
      font-size: 24px;
    }
#wd-tx {
  background: url("../assets/11.jpg");
  height: 180px;
  border-radius: 0 0 50% 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  overflow: hidden;
  margin-top:55px;
}
#wd-tx p {
  display: block;
  margin: 0;
}
#wd-tx p:first-child {
  font-size: 18px;
}


</style>