import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const ProjectDetails = () => import('../components/ProjectDetails.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _2, savedPosition) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      })
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, left: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:projectId',
      props: true,
      component: ProjectDetails
    }
  ]
})

export default router
