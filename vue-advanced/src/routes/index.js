import Vue from 'vue';

import VueRouter from 'vue-router';

import NewsView from '@/views/NewsView.vue';

import JobsView from '@/views/JobsView.vue';

import AskView from '@/views/AskView.vue';

import UserView from '@/views/UserView.vue';

import ItemView from '@/views/ItemView.vue';

import store from '@/store';

import bus from '@/utils/bus.js';

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
      component: NewsView,
      beforeEnter: (to, _, next) => {
        bus.$emit('start:spinner');

        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((err) => {
            console.log(err);
          });
      },

      // component: createListView('NewsView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, _, next) => {
        bus.$emit('start:spinner');

        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((err) => {
            console.log(err);
          });
      },

      // component: createListView('JobsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, _, next) => {
        bus.$emit('start:spinner');

        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((err) => {
            console.log(err);
          });
      },

      // component: createListView('AskView'),
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
