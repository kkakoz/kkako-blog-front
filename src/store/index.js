import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: {}
  },
  mutations: {
    login(state, user) {
      state.user = user
    },
    incr(state) {
      state.count++
    },
    logout(state) {
      state.user = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
