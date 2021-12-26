import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  render: h => h(App)
})
