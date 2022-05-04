import { createRouter, createWebHistory } from 'vue-router'
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product/category',
    name: 'product_category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "product" */ '../views/category/CategoryView.vue'
      )
  },
  {
    path: '/supplier/create',
    name: 'supplier_create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "supplier" */ '../views/supplier/SupplierCreateView.vue'
      )
  },
  {
    path: '/supplier/list',
    name: 'supplier_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "supplier" */ '../views/supplier/SupplierListView.vue'
      )
  },
  {
    path: '/supplier/detail',
    name: 'supplier_detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "supplier" */ '../views/supplier/SupplierDetailView.vue'
      )
  },
  {
    path: '/product/create',
    name: 'product_create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "product" */ '../views/product/ProductCreateView.vue'
      )
  },
  {
    path: '/product/list',
    name: 'product_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "product" */ '../views/product/ProductListView.vue'
      )
  },
  {
    path: '/product/detail',
    name: 'product_detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "product" */ '../views/product/ProductDetailView.vue'
      )
  },
  {
    path: '/order/create',
    name: 'order_create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "order" */ '../views/order/OrderCreateView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
