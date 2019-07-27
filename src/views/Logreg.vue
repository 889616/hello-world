<template>
    <div id="box">
        <van-icon name="contact"  size='15rem' color='#fff' />
        <h2>Welcome</h2>
        <h2>哈喽,欢迎来到宝宝的世界</h2>
        <van-button type="default" round style="height:2.3rem;margin-top:4.49rem" to="Register">注册</van-button>
        <van-button type="default" round style="height:2.3rem;margin-top:2rem" to="Login">登陆</van-button>
        <van-divider />
        <a>help?</a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
        #box{
            width:100%;
            height:100%;
            background:#fb901e
        }
        h2{
            color:#fff;
            font-size:0.5rem;
            font-weight:normal
        }
        .van-button{
            width:9rem;
            border:0;
            font-weight:900;
            line-height:1rem
        }
</style>