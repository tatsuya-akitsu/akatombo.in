import firebase from '@/plugins/firebase.js'
import Firebase from 'firebase'
import { T } from './types'

export const actions = {
  [T.SET_ROUTES]({ commit }, val) {
    commit(T.SET_ROUTES, val)
  },
  [T.USER_LOGGEDIN]({ commit }, obj) {
    firebase
      .auth()
      .signInWithEmailAndPassword(obj.mail, obj.password)
      .then(() => {
        commit(T.USER_LOGGEDIN, true)
      })
      .catch(error => {
        commit(T.USER_LOGIN_ERROR, error)
      })
  },
  [T.USER_LOGOUT]({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit(T.USER_LOGOUT, false)
      })
      .catch(err => {
        console.log(err)
      })
  },
  [T.CHANGE_LOADING]({ commit }, bool) {
    commit(T.CHANGE_LOADING, bool)
  },
  [T.GET_USER_INFO]({ commit }) {
    const userInfo = {}
    userInfo.uid = firebase.auth().currentUser.uid
    userInfo.name = firebasse.auth().currentUser.displayName
    userInfo.email = firebase.auth().currentUser.email
    userInfo.photoUrl = firebase.auth().currentUser.photoURL
    commit(T.GET_USER_INFO, userInfo)
  },
  [T.AJAX_GET_TOP_WEB_WORKS]({ commit }) {
    let _works = []
    firebase
      .firestore()
      .collection('web')
      .limit(7)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          _works.push(Object.assign({ key: doc.id }, doc.data()))
        })
      })
    commit(T.AJAX_GET_TOP_WEB_WORKS, _works)
  },
  [T.AJAX_GET_WORK_THUMBNAIL]({ commit }, obj) {
    const storageRef = Firebase.storage().ref()
    var uploadRef = storageRef.child(obj[0].name)
    const f = obj[0]
    uploadRef.put(f).then(snapShot => {
      uploadRef
        .getDownloadURL()
        .then(url => {
          commit(T.AJAX_GET_WORK_THUMBNAIL, url)
        })
        .catch(error => {
          commit(T.AJAX_GET_THUMBNAIL_ERROR, error)
        })
    })
  },
  [T.AJAX_POST_WORK_DATA]({ commit }, obj) {
    firebase
      .firestore()
      .collection(obj.category)
      .add(obj)
      .then(() => {
        commit(T.AJAX_POST_WORK_DATA, true)
      })
      .catch(error => {
        commit(T.AJAX_POST_WORK_ERROR, error)
      })
  },
  [T.AJAX_GET_WORKS_DATA]({ commit }, val) {
    let _works = []
    firebase
      .firestore()
      .collection(val)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          _works.push(Object.assign({ key: doc.id }, doc.data()))
          commit(T.AJAX_GET_WORKS_DATA, _works)
        })
      })
  },
  [T.AJAX_GET_WORKS_DETAIL_DATA]({ commit }, obj) {
    firebase
      .firestore()
      .collection(obj.category)
      .doc(obj.orderId)
      .get()
      .then(doc => {
        commit(T.AJAX_GET_WORKS_DETAIL_DATA, doc.data())
      })
  },
  [T.AJAX_GET_DETAIL_ITEMS]({ commit }, obj) {
    let _works = []
    firebase
      .firestore()
      .collection(obj)
      .limit(3)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          _works.push(Object.assign({ key: doc.id }, doc.data()))
          commit(T.AJAX_GET_DETAIL_ITEMS, _works)
        })
      })
  }
}
