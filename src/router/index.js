import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/Msite/Msite'
import Order from '@/pages/Order/Order'
import Search from '@/pages/Search/Search'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'
import swiper from '@/pages/Swiper/Swiper'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'swiper',
    },      
    {
      path: '/msite',
      redirect: 'msite',
    },    
    {
      path: '/msite',
      name: 'msite',
      component: Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },        
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        showFooter:false
      }
    } 
  ]
})
