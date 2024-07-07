import { fetchList } from '@/api';

export default {
  FETCH_NEWS({ commit }) {
    fetchList('news')
      .then(({ data }) => commit('SET_NEWS', data))
      .catch((err) => {
        console.log(err);
      });
  },

  FETCH_JOBS({ commit }) {
    fetchList('jobs')
      .then(({ data }) => commit('SET_JOBS', data))
      .catch((err) => {
        console.log(err);
      });
  },

  FETCH_ASK({ commit }) {
    fetchList('ask')
      .then(({ data }) => commit('SET_ASK', data))
      .catch((err) => {
        console.log(err);
      });
  },
};
