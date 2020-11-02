<template>
  <main id="auth" class="auth">
    <h1>Auth</h1>
    <div class="login">
      <h2>Login</h2>
    </div>
    <div class="register">
      <h2>Register</h2>
    </div>
    <div class="remind-pass">
      <h2>Remind password</h2>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Auth',
  layout: 'auth-layout',
  data: () => ({
    authType: 'login',
  }),
}
</script>
