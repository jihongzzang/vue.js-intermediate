import { fetchCommentItem, fetchList, fetchUserInfo } from '@/api';

export default {
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
    return fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST', data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
