import Vue from 'vue'
import VueRouter from 'vue-router'

import {auth} from "../plugins/firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{requireAuth: true}
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import('../views/Ingreso.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta:{requireAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const user = auth.currentUser
  if(to.matched.some(record=> record.meta.requireAuth)){
    if(user){
      next()
    }else{
      next({
        path:'/ingreso',
        //query: {redirect: to.fullPath}
      })
    }
  }else{
    next()
  }
})

export default router
