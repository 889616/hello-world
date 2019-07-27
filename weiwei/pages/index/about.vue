<template>
   <h1>这个是about</h1>
</template>

<script>
  export default{
    asyncData({$axios}){
      console.log(1)
      $axios({

      }).then()
    },
    created(){
      console.log(2)
    }
  }

</script>

<style>
</style>
