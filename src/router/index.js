import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../Layout/Layout.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/Register.vue')
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/Support/Support.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router