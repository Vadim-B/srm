<template>
  <main
    id="not-found"
    class="not-found flex flex-col items-center justify-center"
  >
    <h1>404</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </main>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style>
.not-found {
  font-size: 5rem;
}
</style>
