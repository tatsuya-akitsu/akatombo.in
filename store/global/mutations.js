import { T } from './types'

export const mutations = {
  [T.SET_ROUTES](state, val) {
    state.common.route = val
  },
  [T.USER_LOGGEDIN](state, bool) {
    state.isLoggedin = bool
  },
  [T.USER_LOGOUT](state, bool) {
    state.isLoggedin = bool
  },
  [T.USER_LOGIN_ERROR](state, obj) {
    state.common.errors.push(obj)
  },
  [T.CHANGE_LOADING](state, bool) {
    state.isLoading = bool
  },
  [T.GET_USER_INFO](state, obj) {
    state.userInfo = obj
  },
  [T.AJAX_GET_TOP_WEB_WORKS](state, resObj) {
    state.top.data = resObj
  },
  [T.AJAX_GET_WORK_THUMBNAIL](state, val) {
    state.work.photoUrl = val
  },
  [T.AJAX_GET_THUMBNAIL_ERROR](state, obj) {
    state.common.errors.push(obj)
  },
  [T.AJAX_POST_WORK_DATA](state, bool) {
    state.work.isRegistration = bool
  },
  [T.AJAX_POST_WORK_ERROR](state, obj) {
    state.common.errors.push(obj)
  },
  [T.AJAX_GET_WORKS_DATA](state, arr) {
    state.works = arr
  },
  [T.AJAX_GET_WORKS_DETAIL_DATA](state, resObj) {
    state.detail.work = resObj
  },
  [T.AJAX_GET_DETAIL_ITEMS](state, resObj) {
    state.detail.other = resObj
  }
}
