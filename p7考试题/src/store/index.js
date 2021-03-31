import Vue from 'vue'
import Vuex from 'vuex'
import per from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 0,
    oneList: [],
    twoList: [],
    threeList: [],
    fourList: [],
    fiveList: [],
    sixList: [],
    servenList: [],
  },
  mutations: {
    add(state, data) {
      
    },
    idChange(state, id) {
      state.id = id
    },
    del(state, i) {
      state.showList.splice(i, 1)
    }
  },
  getters: {
    isshow(state) {
      if (state.id == 0) {
        state.showList = state.oneList
      } else if (state.id == 1) {
        state.showList = state.twoList
      } else if (state.id == 2) {
        state.showList = state.threeList
      } else if (state.id == 3) {
        state.showList = state.fourList
      } else if (state.id == 4) {
        state.showList = state.fiveList
      }
      else if (state.id == 5) {
        state.showList = state.sixList
      }
      else if (state.id == 6) {
        state.showList = state.servenList
      }
      return state.showList
    }
  },
  actions: {},
  modules: {},
  plugins: [per()]
})