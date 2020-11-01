export default function({ store, redirect }) {
  console.log(store.getters['auth/hasToken'])
  return true
}
