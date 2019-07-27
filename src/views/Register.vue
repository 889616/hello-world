<template>
    <div>
        <!-- 顶部按钮 -->
        <div style="background:#f2f2f2;height:4rem">
        <van-button type="default" style="background:#e7e7e7;width:32%;float:left" round>时光记</van-button>
        <van-button type="default" style="background:#e7e7e7;width:32%;" round to="Login">登陆</van-button>
        <van-button type="default" style="background:#ffbc48;width:32%;float:right;color:#fff" round>注册</van-button>
        </div>
        <!-- 用户名 -->
     <van-cell-group>
        <van-field v-model="username" placeholder="用户名" left-icon="contact" ref="ipt4" @blur="ming()" :error-message="mm"/>
        </van-cell-group>

        <!-- 密码 -->
        <van-field
            v-model="password"
            placeholder="密码"
            left-icon="bag-o"
            type="password"
            ref="ipt2"
            @blur="ru()"
            :error-message="ss"
            />
        <!-- 手机号 -->
          <van-field
            v-model="phone"
            left-icon="phone-o"
            placeholder="手机号"
            type="phone"
            ref="ipt1"
            @blur="shu()"
            :error-message="ii"
        />
        <!-- 短信验证 -->
        <!-- <van-cell-group>
        <van-field
            v-model="sms"
            center
            clearable
            left-icon="comment-o"
            placeholder="短信验证码"
            ref="yan"
        >
            <van-button slot="button" size="small" type="primary" @click="yan()">发送验证码</van-button>
        </van-field>
        </van-cell-group> -->
        <!-- 邮箱 -->
         <van-field
            v-model="email"
            left-icon="envelop-o"
            placeholder="邮箱"
            type="email"
            ref="ipt3"
            @blur="you()"
             :error-message="dd"
        />        
        <!-- 登陆按钮 -->
        <van-button type="default" class="btn-l" @click="zhu()" style='width:100%;background:#ffbc48;height:2rem;position:absolute;left:0;bottom:0'>注册</van-button>
            
    </div>
</template>

<script>
import qs from 'qs';
  import axios from "axios";
export default {
     name: "Redister",
      data(){
        return{
            username:"",
            password:"",
            show: false,
            value: '',
            phone:"",
            email:'',
            ii:'',
            ss:'',
            dd:'',
            mm:'',        
            fa:'',
            fb:'',
            }
    },
    methods: {
        ming(){
            let m =/^[a-zA-Z0-9_-]{4,16}$/;
            if(
                m.test(this.$refs.ipt4.value) !=true
            ){
                this.mm ='用户名格式错误'
            }
        },
        you(){
            let b = /^([A-Za-z0-9_\-\.])+\@([qq|163|126])+\.(com|cn|com\.cn)$/;
            if (
                    b.test(this.$refs.ipt3.value) != true
                ) {
                    this.dd = "邮箱输入错误";
                } 
        },
         shu() {
      let _this = this;
      let a = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/;
      

      if (
        a.test(_this.$refs.ipt1.value) != true 
      ) {
        _this.ii = "手机号输入错误";
      } else {
        this.fa = true;
        _this.ii = "输入正确";
      } 
    },
    ru() {
      let a = /\S{6,12}/;
      if (a.test(this.$refs.ipt2.value) != true) {
        this.ss = "密码必须是6到12位";
      }else {
        this.ss = " ";
        this.fb = true;
      } 
    },

      zhu() {
      if (this.fa == false || this.fb==false) {
        alert("请输入正确格式");
      } else {
        
        console.log(this.$refs.ipt2.value, this.$refs.ipt1.value);
        var _this = this;
        axios({
          method: "post",
          url: "http://106.12.11.4:8888/ShiGuangJi/shiguangji/register.do",

          data: qs.stringify({
            username: _this.$refs.ipt1.value,
            password: _this.$refs.ipt2.value
          })
        }).then(function(res) {
          console.log(res.data);
          // _this.$router.push('/rend')
        });
      }
    },
     

    }
}
</script>

<style scoped>

</style>