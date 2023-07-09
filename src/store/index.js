import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myColor: '#409eff'
  },
  getters: {},
  mutations: {
    changeColor(state, v) {
      state.myColor = v
    }
  },
  actions: {},
  modules: {}
})
