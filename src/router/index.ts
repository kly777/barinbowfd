import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/cardlist',
    name: 'cardlist',
    component: () => import('../views/CardList.vue')
  },
  {
    path: '/card/:id',
    name: 'card',
    component: () => import('../views/CardInfo.vue')
  },
  {
    path: '/card',
    name: 'cardself',
    component: () => import('../views/CardItself.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
