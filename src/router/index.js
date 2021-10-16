import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CountryPage from '../views/CountryPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
    props: true
  },
  {
    path: '/name/:name',
    name: 'country-page',
    component: CountryPage,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
