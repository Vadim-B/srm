<template>
  <main id="auth">
    <div class="auth fluid-contain">
      <div
        class="signup"
        :class="{
          'slide-up': authType === 'login' || authType === 'forgotPass',
        }"
      >
        <h2 id="signup" class="form-title" @click="showSignup">
          <span>or</span>Sign up
        </h2>
        <div class="form-holder">
          <input type="text" class="input" placeholder="Name" />
          <input type="email" class="input" placeholder="Email" />
          <input type="password" class="input" placeholder="Password" />
        </div>
        <button class="submit-btn">Sign up</button>
      </div>
      <div class="login" :class="{ 'slide-up': authType === 'signup' }">
        <div class="center">
          <h2 id="login" class="form-title" @click="showLogin">
            <span>or</span>Log in
          </h2>
          <div class="form-holder">
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
          </div>
          <button class="submit-btn">Log in</button>
          <p @click="authType = 'forgotPass'">Напонить пароль</p>
        </div>
        <div id="forgot-password" class="center">
          <h2 class="form-title">Forgot password</h2>
          <div class="form-holder">
            <input type="email" class="input" placeholder="Email" />
          </div>
          <button class="submit-btn">Forgot</button>
          <p @click="authType = 'login'">Вернуться на логин</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import './index.scss'

export default {
  name: 'Auth',
  data: () => ({
    authType: 'signup',
  }),
  middleware: 'checkAuth',
  methods: {
    showLogin() {
      this.authType = 'login'
    },
    showSignup() {
      this.authType = 'signup'
    },
  },
}
</script>
