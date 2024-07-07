import Vue from 'vue';

import VueRouter from 'vue-router';

import UserView from '@/views/UserView.vue';

import ItemView from '@/views/ItemView.vue';

import createListView from '@/views/CreateListView.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },

    {
      path: '/news',
      name: 'news',
      component: createListView('news'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('jobs'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('ask'),
    },

    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});

export default router;
