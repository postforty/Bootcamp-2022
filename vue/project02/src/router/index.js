import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import HelloView from '../views/HelloView.vue'

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
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue'
      )
  },
  {
    path: '/hello',
    name: 'hello',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "hello" */ '../views/HelloView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingCheckboxView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingRadioView.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStyleView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingClassView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingListView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/2_event/EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/2_event/EventChangeView.vue'
      )
  }
  // {
  //   path: '/hello',
  //   name: 'hellow',
  //   component: HelloView
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
