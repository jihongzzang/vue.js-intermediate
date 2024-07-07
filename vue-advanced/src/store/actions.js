import { fetchCommentItem, fetchList, fetchUserInfo } from '@/api';

export default {
  // FETCH_NEWS({ commit }) {
  //   fetchList('news')
  //     .then(({ data }) => commit('SET_NEWS', data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  // FETCH_JOBS({ commit }) {
  //   fetchList('jobs')
  //     .then(({ data }) => commit('SET_JOBS', data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  // FETCH_ASK({ commit }) {
  //   fetchList('ask')
  //     .then(({ data }) => commit('SET_ASK', data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => commit('SET_USER', data))
      .catch((err) => {
        console.log(err);
      });
  },

  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch((err) => {
        console.log(err);
      });
  },

  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch((err) => {
        console.log(err);
      });
  },
};
