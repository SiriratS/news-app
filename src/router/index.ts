import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ErrorView from '@/views/ErrorView/ErrorView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import NewsDetail from '@/views/NewsDetailView/NewsDetailView.vue';
import store from '@/store/index';

Vue.use(VueRouter);

const newsDetailPage = 'news';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/news/:index',
    name: newsDetailPage,
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

router.afterEach((hook) => {
  if (hook.name === newsDetailPage) store.commit('pushVisitedNews', hook);
});

export default router;
