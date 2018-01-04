// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import { firebase } from '@firebase/app';

Vue.use(VueFire)
Vue.config.productionTip = false

let config = {
  apiKey: 'AIzaSyDE312DcOcetMW7IA0VUoNdTaAbOL3r4Kg',
  authDomain: 'belajar-vue-firebase.firebaseapp.com',
  databaseURL: 'https://belajar-vue-firebase.firebaseio.com',
  projectId: 'belajar-vue-firebase',
  storageBucket: 'belajar-vue-firebase.appspot.com',
  messagingSenderId: '624078079068'
}

  firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
