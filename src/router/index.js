import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/AppLayout';
import HomePage from '@/views/HomePage';
import Login from '@/views/Login';
import Rooms from '@/views/Rooms';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
      path: '/',
      component: HomePage,
      meta: {
        isAppBar: false,
        isAppFooter: false
      }
    }, {
      path: '/login',
      component: Login,
      meta: {
        isAppBar: false,
        isAppFooter: false
      }
    }, {
      path: '/rooms',
      component: Rooms,
      meta: {
        isAppBar: true,
        isAppFooter: true
      }
    }]
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
