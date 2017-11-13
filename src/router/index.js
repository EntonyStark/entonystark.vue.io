/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/Nav'
import General from '@/components/general'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'nav',
      component: Navigation
    },
    {
      path: '/general',
      name: 'General',
      component: General
    }
  ]
})
