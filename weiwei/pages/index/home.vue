<template>
  <div>
  <h1>这个是home</h1>
  <nuxt-link :to="{path:'/detail',query:{id:111}}">路由传参</nuxt-link>
  <nuxt-link :to="{path:'/detail'}">路由传参</nuxt-link>
  </div>
</template>

<script>
</script>

<style>
</style>
