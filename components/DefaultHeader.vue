<template>
  <header>
    <nuxt-link exact no-prefetch active-class="--active" class="btn" to="/">
      Home
    </nuxt-link>
    <nuxt-link no-prefetch active-class="--active" class="btn" to="/about">
      About
    </nuxt-link>
    <nuxt-link no-prefetch active-class="--active" class="btn" to="/auth">
      Auth
    </nuxt-link>
    <nuxt-link no-prefetch active-class="--active" to="/users">
      Users
    </nuxt-link>
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
  background-color: var(--primary);
  color: var(--white);
  text-align: center;
  font-size: 2rem;
  padding-top: 16px;
  padding-bottom: 16px;
}

a {
  padding: 4px 12px;
  border-radius: var(--btn-bdrs);
}

a.--active {
  background-color: var(--white);
  color: var(--primary);
}
</style>
