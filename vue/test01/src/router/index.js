import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import TransitionTestView from '../views/TransitionTestView.vue'
import AxiosTestView from '../views/AxiosTestView.vue'
import ellipsisTestView from '../views/ellipsisTestView.vue'
import SwitchTestView from '../views/SwitchTestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/parent_component5',
    name: 'parent_component5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "parent_component5" */ '../views/ParentComponent5.vue')
  },
  {
    path: '/parent_component4',
    name: 'parent_component4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "parent_component4" */ '../views/ParentComponent4.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/test/transition',
    name: 'TransitionTestView',
    component: TransitionTestView
  },
  {
    path: '/test/axiostest',
    name: 'AxiosTestView',
    component: AxiosTestView
  },
  {
    path: '/test/ellipsistest',
    name: 'ellipsisTestView',
    component: ellipsisTestView
  },
  {
    path: '/test/switchtestview',
    name: 'SwitchTestView',
    component: SwitchTestView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
