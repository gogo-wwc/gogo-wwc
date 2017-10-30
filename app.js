import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { currency } from './helper/currency'
import 'materialize-css/dist/css/materialize.css'
import './assets/global.css'

Vue.filter('currency', currency)

// Step 1
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
