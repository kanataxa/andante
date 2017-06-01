import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import materialize from '../node_modules/materialize-css/bin/materialize.js'

Vue.use(Vuetify)
new Vue({
  el: '#app',
  render: h => h(App)
})
