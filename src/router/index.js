import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Board from '@/components/Board'
import { firebase } from '@firebase/app'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/board',
      name: 'Board',
      component: Board,
      meta : {
         requiresAuth : true
      }
    },
  ]
})

router.beforeEach((to , from , next ) => {
    let currentUser = firebase.auth().currentUser
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    if(requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('board')
    else next()
})

export default router

