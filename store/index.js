import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoading: false,
      isLoggined: false,
      route: ''
    },
    mutations: {
      loggined(state) {
        state.isLoggined = true
      },
      logout(state) {
        state.isLoggined = false
      },
      inLoading(state) {
        state.isLoading = true
      },
      outLoading(state) {
        state.isLoading = false
      },
      routing(state, val) {
        state.route = val
      }
    }
  })
}

export default createStore
