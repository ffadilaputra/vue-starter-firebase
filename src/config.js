import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDE312DcOcetMW7IA0VUoNdTaAbOL3r4Kg',
  authDomain: 'belajar-vue-firebase.firebaseapp.com',
  databaseURL: 'https://belajar-vue-firebase.firebaseio.com',
  projectId: 'belajar-vue-firebase',
  storageBucket: 'belajar-vue-firebase.appspot.com',
  messagingSenderId: '624078079068'
}

let main = firebase.initializeApp(config)
let db = main.database()

let booksRef = db.ref('books')

export { db , config , booksRef}
