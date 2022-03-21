import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import store from '../store'
// import HelloView from '../views/HelloView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login2',
    component: LoginView
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
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/2_event/EventKeyView.vue'
      )
  },
  {
    path: '/extra/if',
    name: 'RenderingIfView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/3_extra/RenderingIfView.vue'
      )
  },
  {
    path: '/extra/show',
    name: 'RenderingShowView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/3_extra/RenderingShowView.vue'
      )
  },
  {
    path: '/extra/computed',
    name: 'ComputedView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/3_extra/ComputedView.vue'
      )
  },
  {
    path: '/extra/watch',
    name: 'WatchView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/3_extra/WatchView.vue'
      )
  },
  {
    path: '/extra/life',
    name: 'LifecyleHookView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/3_extra/LifecyleHookView.vue'
      )
  },
  // {
  //   path: '/reuse/page',
  //   name: 'PageView',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "databinding" */ '../views/4_reuse/PageView.vue'
  //     )
  // },
  {
    path: '/reuse/list',
    name: 'ListView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/4_reuse/ListView.vue'
      )
  },
  {
    path: '/reuse/slot',
    name: 'SlotView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/4_reuse/SlotView.vue'
      )
  },
  {
    path: '/reuse/parent',
    name: 'ParentView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/4_reuse/ParentView.vue'
      )
  },
  {
    path: '/advanced/provide',
    name: 'ProvideView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/5_advanced/ProvideView.vue'
      )
  },
  {
    path: '/advanced/directive',
    name: 'CustomDirectiveView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/5_advanced/CustomDirectiveView.vue'
      )
  },
  {
    path: '/advanced/mixin',
    name: 'MixinView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/5_advanced/MixinView.vue'
      )
  },
  {
    path: '/advanced/plugin',
    name: 'PluginView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/5_advanced/PluginView.vue'
      )
  },
  {
    path: '/vuex/todo',
    name: 'TodoView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/6_vuex/TodoView.vue'
      )
  },
  {
    path: '/template/listtodetail',
    name: 'ListToDetailView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/ListToDetailView.vue'
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

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next()
  } else {
    if (store.getters['user/isLogin']) {
      next()
    } else {
      store.commit('/user/logout')
      next('/')
    }
  }
})

export default router
