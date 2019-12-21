import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/Home'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [{
    path: '/',
    component: Home
  }]
})
