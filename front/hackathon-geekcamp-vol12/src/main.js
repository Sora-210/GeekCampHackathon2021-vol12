import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

/*
firebase setting
必要関数のインポート
*/
import { initializeApp } from '@firebase/app'
import { onAuthStateChanged, getAuth } from '@firebase/auth'

/* インスタンス設定 */
initializeApp({
  apiKey: 'AIzaSyANLlAq0wD0SafGCPwQbjYXKCwwbdJiEVA',
  authDomain: 'hackathon-mylog.firebaseapp.com'
})
/* 現在のログイン情報を取得 */
const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit('setUser', user)
  }
})

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
