<template>
  <div id="app">
    <andante-header></andante-header>
    <div class='container'>
    <h2>~ララへの愛を添えて~</h2>
    </div>
    <andante-footer></andante-footer>
  </div>
</template>

<script>
import AndanteFooter from  './components/Footer.vue'
import AndanteHeader from  './components/Header.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { AndanteFooter, AndanteHeader }
}
</script>

<style>
</style>
