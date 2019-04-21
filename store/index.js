import Vue from 'vue'
import Vuex from 'vuex'
import global from './global'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      global: global
    }
  })
}

export default createStore
