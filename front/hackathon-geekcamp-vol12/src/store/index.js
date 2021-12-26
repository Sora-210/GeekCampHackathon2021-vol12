import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User: null
  },
  getters: {
    isLogin: (state) => {
      return state.User != null
    }
  },
  mutations: {
    setUser (state, user) {
      state.User = user
    },
    deleteUser (state, user) {
      state.User = null
    }
  },
  actions: {
  },
  modules: {
  }
})
