import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },

]

const router = new VueRouter({
  routes
})

export default router
