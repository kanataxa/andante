<template>
  <div id="app">
    <andante-header></andante-header>
      <andante></andante>
    <andante-footer></andante-footer>
  </div>
</template>

<script>
import AndanteFooter from  './components/Footer.vue'
import AndanteHeader from  './components/Header.vue'
import Andante from  './components/Message.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { AndanteFooter, AndanteHeader, Andante }
}
</script>

<style>
</style>
