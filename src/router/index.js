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
    path: '/sneakers',
    name: 'sneakers',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sneakers.vue')
  },
  {
    path: '/sneakers/sneaker/:id',
    name: 'Sneaker',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sneaker.vue')
  },
  {
    path: '/Portraits',
    name: 'portraits',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portraits.vue')
  },
  {
    path: '/portraits/portrait/:id',
    name: 'Portrait',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portrait.vue')
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
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0};
    }

  }
})

export default router