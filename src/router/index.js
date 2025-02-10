import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: import('../views/LoginView.vue')
  },
  {
    path: '/addBook',
    name: 'AddBook',
    component: import('../views/AddBookView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
