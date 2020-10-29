<template>
  <header>
    <nuxt-link exact active-class="--active" to="/">Home</nuxt-link>
    <nuxt-link active-class="--active" to="/about">About</nuxt-link>
    <nuxt-link active-class="--active" to="/auth">Auth</nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'DefaultHeader',
}
</script>

<style scoped>
header {
  text-align: center;
  font-size: 2rem;
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
