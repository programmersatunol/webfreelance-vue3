import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import About from '../views/About.vue';
import Shop from '@/views/Shop.vue';
import Courses from '@/views/Courses.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/about', name: 'About', component: About },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/courses', name: 'Courses', component: Courses },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
