import Vue from 'vue'
import VueRouter from 'vue-router'
import T1 from '../views/T1.vue'
import T2 from '../views/T2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/t1',
    component: T1
  },
  {
    path: '/t2',
    component: T2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
