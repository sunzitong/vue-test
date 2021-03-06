import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: {
      path: '/index',
    },
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
