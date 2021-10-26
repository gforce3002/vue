import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requiredAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      requiredAuth: true
    }
  },
  {
    path: '/notas',
    name: 'Notas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas/index.vue'),
    meta:{
      requiredAuth: true
    }
  },
  {
    path: '/notas/new',
    name: 'NotasNew',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas/_id.vue'),
    meta:{
      requiredAuth: true
    }
  },
  {
    path: '/notas/edit/:id',
    name: 'NotasEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas/_id.vue'),
    meta:{
      requiredAuth: true
    }
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

router.beforeEach((to, from, next)=>{
  const rutaprotegida = to.matched.some(record=>record.meta.requiredAuth)
  console.log(store.state)
  if(rutaprotegida && !store.state.session){
    next({name:'Login'})
  }else{
    next();
  }
})
export default router
