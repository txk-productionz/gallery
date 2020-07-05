import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  
  const routes = [
  {
    path: '/',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gallery.vue')
  },
  {
    path: '/photo/:id',
    name: 'Photo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Photo.vue')
  },
  {
    path: '/watches',
    name: 'Watches',
    component: () => import(/* webpackChunkName: "about" */ '../views/Watches.vue')
  },
  {
    path: '/watches/watch/:id',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "about" */ '../views/Watch.vue')
  },
  {
    path: '/cars',
    name: 'Cars',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cars.vue')
  },
  {
    path: '/cars/car/:id',
    name: 'Car',
    component: () => import(/* webpackChunkName: "about" */ '../views/Car.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router