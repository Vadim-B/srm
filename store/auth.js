export const state = () => ({
  token: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken() {
    state.token = null
  },
}

export const actions = {
  login({ commit }) {},
  logout({ commit }) {},
  register({ commit }) {},
  forgotPass({ commit }) {},
}

export const getters = {
  hasToken: (state) => !!state.token,
}
