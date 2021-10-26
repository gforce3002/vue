import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/notas',
    name: 'Notas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas/index.vue')
  },
  {
    path: '/notas/new',
    name: 'NotasNew',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas/_id.vue')
  },
  {
    path: '/notas/edit/:id',
    name: 'NotasEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas/_id.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/Login.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
