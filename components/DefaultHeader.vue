<template>
  <header>
    <nuxt-link exact active-class="--active"
               class="btn"
               to="/"
    >Home</nuxt-link>
    <nuxt-link active-class="--active"
               class="btn"
               to="/about"
    >About</nuxt-link>
    <nuxt-link active-class="--active"
               class="btn"
               to="/auth"
    >Auth</nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'DefaultHeader',
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
