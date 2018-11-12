import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyD45JbcspPIcGDmHm3WSW7M6Jg-_pcHClc',
    authDomain: 'portfolio-1ddf7.firebaseapp.com',
    databaseURL: 'https://portfolio-1ddf7.firebaseio.com',
    projectId: 'portfolio-1ddf7',
    storageBucket: 'portfolio-1ddf7.appspot.com',
    messagingSenderId: '175614142826'
  })
}

export default firebase
