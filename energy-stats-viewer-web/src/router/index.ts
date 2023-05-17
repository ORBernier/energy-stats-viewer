import DashboardViewVue from '@/views/DashboardView.vue';
import DemandListViewVue from '@/views/DemandListView.vue';
import HomeViewVue from '@/views/HomeView.vue';
import NotFoundViewVue from '@/views/NotFoundView.vue';
import ProductionListViewVue from '@/views/ProductionListView.vue';
import ProductionGridViewVue from '@/views/ProductionGridView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardViewVue,
    },
    {
      path: '/demand-list',
      name: 'demandList',
      component: DemandListViewVue,
    },
    {
      path: '/production-list',
      name: 'productionList',
      component: ProductionListViewVue,
    },
    {
      path: '/production-grid',
      name: 'productionGrid',
      component: ProductionGridViewVue,
    },
    {
      path: '/:catchall(.*)*',
      name: 'Not Found',
      component: NotFoundViewVue,
    },
  ],
});

export default router;
