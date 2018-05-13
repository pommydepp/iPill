import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Create from '@/components/Create'
import Edit from '@/components/Edit'
import Search from '@/components/Search'
import Reminder from '@/components/Reminder'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      meta: {requireAuth: true}
    },
    {
      path: '/edit/:key',
      name: 'edit',
      component: Edit,
      meta: {requireAuth: true}
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/reminder',
      name: 'reminder',
      component: Reminder,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ]
})
