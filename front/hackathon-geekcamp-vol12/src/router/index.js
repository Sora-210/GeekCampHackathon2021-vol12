import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/components/Top'
import Home from '@/components/Home'
import UserList from '@/components/UserList'
import Profile from '@/components/Profile'
import TargetList from '@/components/TargetList'
import Target from '@/components/Target'
import AddTarget from '@/components/AddTarget'
import System from '@/components/System'
import NoPage from '@/components/NoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/user:userId',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/target',
      name: 'TargetList',
      component: TargetList
    },
    {
      path: '/target:id',
      name: 'Target',
      component: Target
    },
    {
      path: '/user:userId/target/add',
      name: 'AddTarget',
      component: AddTarget
    },
    {
      path: '/system',
      name: 'System',
      component: System
    },
    {
      path: '/search',
      name: 'Search',
      redirect: '/error'
    },
    {
      path: '/setting',
      name: 'Setting',
      redirect: '/error'
    },
    {
      path: '/error',
      component: NoPage
    }
  ]
})
