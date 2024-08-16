import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import SplashPage from '@/views/SplashPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/splashscreen'
  },
  {
    path: '/splashscreen',
    name:'SplashPage',
    component: SplashPage
  },
  {
    path: '/loginpage',
    name:'loginPage',
    component: LoginPage
  },
  {
    path: '/signuppage',
    name:'signupPage',
    component: SignUpPage
  },
  {
    path: '/tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
      {
        path: '/dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: '/transactions',
        component: () => import('@/views/Transactions.vue')
      },
      {
        path: '/settings',
        component: () => import('@/views/Settings.vue')
      },
      {
        path: '/accounts',
        component: () => import('@/views/AccountsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
