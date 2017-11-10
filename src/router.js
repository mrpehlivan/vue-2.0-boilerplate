import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/boilerplate/'
import NotFound from './components/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // scrollBehavior: true,  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})
export default router