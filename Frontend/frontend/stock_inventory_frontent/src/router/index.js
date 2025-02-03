import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLoginPage from '@/components/For_Register/loginThree.vue'

import TestingOne from '@/components/Testing/testingOne.vue'
import TestingTwo from "@/components/Testing/testingTwo.vue";

import mainTestPage from '@/components/MainTestContentPage.vue'

const routes = [

  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Home',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: MainLoginPage
  },
  {
    path: '/testing',
    name: 'testing',
    component: TestingOne
  },
  {
    path: '/testingTwo',
    name: 'testingTwo',
    component: TestingTwo
  },
  {
    path: '/mainTestPage',
    name: 'mainTestPage',
    component: mainTestPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
