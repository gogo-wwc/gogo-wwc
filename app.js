import 'babel-polyfill'
import Vue from 'vue'
// Bring in Vue layer of the app (parent)
import App from './components/App.vue'
// Bring in vuex store (state management of whole app)
import store from './store'

import { currency } from './helper/currency'
import 'materialize-css/dist/css/materialize.css'
import './assets/global.css'

Vue.filter('currency', currency)

// Step 1: Kick off vue and run the app
console.log('Step 1: Kick off vue and run the app');
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
