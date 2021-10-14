import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from '../components/NavBar.vue'
import OkRouter from '../components/OkRouter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: NavBar
  },
  {
    path: '/OkRouter/:area',
    name: '',
    component:OkRouter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
