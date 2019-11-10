import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Pool from '../views/Pool.vue';
import PoolNew from '../views/PoolNew.vue';
import PoolStats from '../views/PoolStats.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/pools', name: 'pools', component: Home },
  { path: '/pools/new', name: 'pools-new', component: PoolNew },
  { path: '/pools/:id', name: 'pools-view', component: Pool },
  { path: '/pools/:id/stats', name: 'pool-view-stats', component: PoolStats },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
