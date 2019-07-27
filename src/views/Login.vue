<template>
    <div>
        <div style="background:#f2f2f2;height:4rem">
         <van-button type="default" style="background:#e7e7e7;width:32%;float:left" round>时光记</van-button>
        <van-button type="default" style="background:#ffbc48;width:32%;color:#fff" round to="Login">登陆</van-button>
        <van-button type="default" style="background:#e7e7e7;width:32%;float:right;" round to="Register">注册</van-button>
        </div>
        <van-cell-group>
        <!-- <van-field v-model="username" placeholder="用户名" left-icon="contact" required/> -->
        <van-field
        v-model="username"
          required
          left-icon="user-o"
          placeholder="请输入用户名"
          
        />
        </van-cell-group>
        <!-- <van-field
            v-model="password"
            placeholder="密码"
            left-icon="bag-o"
            type="password"
            clearable
            required
            /> -->
        <van-field type="password" v-model="password" left-icon="closed-eye" clearable placeholder="请输入密码" required />
        
        <router-link to="/Life" tag="p" style="position:absolute;bottom:3rem">无需登陆访问此网站</router-link>
        <van-button type="default" style='width:100%;background:#ffbc48;height:2rem;position:absolute;left:0;bottom:0' @click='top()' ref="btn" class="btn-l">登陆</van-button>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      username:'',
      password:'',
      token:''
    }
  },
  methods: {
     top(){
      let _this = this;
      axios({
        url:'http://106.12.11.4:8888/ShiGuangJi/shiguangji/login.do',
        params:{
          username:_this.username,
          password:_this.password
          }
      }).then(function(data){
          console.log(data)
        if(data.data.code == 1){
          _this.token = data.data.msg.uid
          _this.$store.commit('user',_this.username)
           _this.$store.commit('token',_this.token)
            _this.$store.commit('pass',_this.password)
          _this.$router.push('/toremember')
        }else{
          alert(data.data.msg)
          _this.$router.push('/register')
        }
        
      })
    }   

  },
 

};
</script>

<style scoped>
    
</style>