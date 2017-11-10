import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import App from 'components/App'
import './assets/styles/index.css'

sync(store, router)

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})