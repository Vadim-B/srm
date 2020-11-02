<template>
  <main class="user">
    <h1>User {{ $route.params.id }}</h1>
  </main>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
}
</script>
