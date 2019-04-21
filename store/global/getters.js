export const getters = {
  getInitLoading(state) {
    return state.isLoading
  },
  getPageRoute(state) {
    return state.common.route
  },
  getNavItems(state) {
    return state.common.items
  },
  getUserLoggedin(state) {
    return state.isLoggedin
  },
  getUserInfo(state) {
    return state.userInfo
  },
  getTopWorks(state) {
    const _worksObj = {}
    _worksObj.default = state.top.defaultData
    _worksObj.data = state.top.data
    return _worksObj
  },
  getRegistrationWork(state) {
    return state.work
  },
  getWorkThumbnail(state) {
    return state.work.photoUrl
  },
  getWorksData(state) {
    return state.works
  },
  getWorkDetail(state) {
    return state.detail
  }
}
