import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Shop from '@/views/Shop.vue';
import Courses from '@/views/Courses.vue';
import Portfolio from '../views/Portfolio.vue';
import PortfolioDetail from '@/views/PortfolioDetail.vue';
import CoursesDetail from '@/views/CoursesDetail.vue';
import ShopDetail from '@/views/ShopDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/portfolio/:slug', name: 'PortfolioDetail', component: PortfolioDetail },
  { path: '/about', name: 'About', component: About },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/courses', name: 'Courses', component: Courses },
  {
    path: '/courses/:slug',
    name: 'CourseDetail',
    component: CoursesDetail,
  },
  {
    path: '/produk/:link',
    name: 'ProductDetail',
    component: ShopDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
