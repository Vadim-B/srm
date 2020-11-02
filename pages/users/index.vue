<template>
  <main class="users">
    <ul>
      <li v-for="user in 5" :key="user">
        <a href="#" @click.prevent="openUser(user)">User {{ user }}</a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user)
    },
  },
}
</script>
