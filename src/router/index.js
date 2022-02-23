import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../page/Home.vue'
import AboutView from '../page/About.vue'
import Error from '../page/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: Error
  },
 
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
