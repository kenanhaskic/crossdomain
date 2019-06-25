import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'


Vue.use(Vueaxios,axios)

new Vue({
  el: '#app',
  render: h => h(App)
})
