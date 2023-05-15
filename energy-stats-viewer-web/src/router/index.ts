import DemandListViewVue from '@/views/DemandListView.vue';
import HomeViewVue from '@/views/HomeView.vue';
import ProductionListViewVue from '../views/ProductionListView.vue';
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
      path: '/demand-list',
      name: 'demandList',
      component: DemandListViewVue,
    },
    {
      path: '/production-list',
      name: 'productionList',
      component: ProductionListViewVue,
    },
  ],
});

export default router;
