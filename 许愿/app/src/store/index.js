import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj:{
      name:'',
      mobile:'',
      pass:''
    }
  },
  mutations: {
    stateChange(state,obj){
      state.obj=obj
    }
  },
  actions: {
  },
  modules: {
  }
})
