import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/AppLayout';
import HomePage from '@/views/HomePage';
import Login from '@/views/Login';
import Rooms from '@/views/Rooms';
import Room from '@/views/Room';
import MyRoom from '@/views/MyRoom';
import Message from '@/views/Message'
import Report from '@/views/Report'

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
    }, 
    {
      path: '/login',
      component: Login,
      meta: {
        isAppBar: false,
        isAppFooter: false
      }
    },
    {
      path: '/rooms',
      component: Rooms,
      meta: {
        isAppBar: true,
        isAppFooter: true
      }
    },
    {
      path: '/room',
      component: Room,
      meta: {
        isAppBar: true,
        isAppFooter: true
      }
    },
    {
      path: '/my-room',
      component: MyRoom,
      meta: {
        isAppBar: true,
        isAppFooter: true
      }
    },
    {
      path: '/message',
      component: Message,
      meta: {
        isAppBar: true,
        isAppFooter: true
      }
    },
    {
      path: '/report',
      component: Report,
      meta: {
        isAppBar: true,
        isAppFooter: true
      }
    }]
  }
]

export function createRouter(store) {
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.isAppBar)) {
      store.dispatch('setIsAppBar', true);
    } else {
      store.dispatch('setIsAppBar', false);
    }
    if (to.matched.some(record => record.meta.isAppFooter)) {
      store.dispatch('setIsAppFooter', true);
    } else {
      store.dispatch('setIsAppFooter', false);
    }
    next();
  })

  return router
}