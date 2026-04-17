import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
  { path: '/services', name: 'Services', component: () => import('@/views/Services.vue') },
  { path: '/countries', name: 'Countries', component: () => import('@/views/Countries.vue') },
  { path: '/news', name: 'News', component: () => import('@/views/News.vue') },
  { path: '/contacts', name: 'Contacts', component: () => import('@/views/Contacts.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
