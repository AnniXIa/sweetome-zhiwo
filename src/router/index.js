/*
 * @Author: your name
 * @Date: 2021-05-05 20:44:46
 * @LastEditTime: 2021-06-22 12:02:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-dev【0425】\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) 
const routes = [
  {
    path:'/',
    name: 'index',
    component: resolve => require(['../views/home/city-list.vue'], resolve)    
  }, 
  {
    path:'/city-change',
    name: 'city-change',
    component: resolve => require(['../views/home/city-change.vue'], resolve)    
  },  
  {
    path:'/city-info',
    name: 'city-info',
    component: resolve => require(['../views/home/city-info.vue'], resolve)    
  },  
  {
    path:'/scenic-spot',
    name: 'scenic-spot',
    component: resolve => require(['../views/home/scenic-spot.vue'], resolve)    
  },  
  {
    path:'/poster',
    name: 'poster',
    component: resolve => require(['../views/home/poster.vue'], resolve)    
  },  
  {
    path:'/prize',
    name: 'prize',
    component: resolve => require(['../views/prize/prize.vue'], resolve)    
  },  
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
