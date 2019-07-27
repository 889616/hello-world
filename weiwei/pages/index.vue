<template>
  <div class="container">
    <h1>会当凌绝顶</h1>
    <p>一览众山小</p>
    <nuxt-link to="/home">Home</nuxt-link>
    <nuxt-link to="/about">about</nuxt-link>
    <hr/>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

</style>
