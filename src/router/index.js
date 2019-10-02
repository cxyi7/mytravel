import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import User from '@/pages/user/User'
import UserLogin from '@/pages/user/components/Login'
import UserRegistered from '@/pages/user/components/Registered'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/user',
    name: 'User',
    component: User
  }, {
    path: '/user/components/Login',
    name: 'UserLogin',
    component: UserLogin
  }, {
    path: '/user/components/Registered',
    name: 'UserRegistered',
    component: UserRegistered
  }]
})
