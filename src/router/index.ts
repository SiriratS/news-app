import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ErrorView from '@/views/ErrorView/ErrorView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import NewsDetail from '@/views/NewsDetailView/NewsDetailView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/news/:index',
    name: 'news',
    component: NewsDetail,
  },
  {
    path: '*',
    name: 'error',
    component: ErrorView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
