import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import( '../views/Dashboard.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import( '../views/Projects.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import( '../views/Team.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
