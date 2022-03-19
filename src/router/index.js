import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TextFileView from '../views/TextFileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/json',
    name: 'json',
    component: () => import(/* webpackChunkName: "about" */ '../views/JsonView.vue')
  },
  {
    path: '/chunja',
    name: 'chunja',
    component: TextFileView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
