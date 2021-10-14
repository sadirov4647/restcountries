import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    borders: [],
  },
  mutations: {
    resetBorders(state) {
      state.borders = []
    },
  },
  actions: {
  },
  modules: {
  }
})
