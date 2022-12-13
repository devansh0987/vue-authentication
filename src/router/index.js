import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      requiresAuth : true
    }
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{
      requiresAuth : true
    }
  },
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/register',
    name:'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('token')){
      next();
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default router
