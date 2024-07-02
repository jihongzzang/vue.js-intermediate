import { createStore } from 'vuex';

import * as getters from './getters';

import * as mutations from './mutations';

const storage = {
  fetch() {
    let arr = [];

    const savedItems = localStorage.getItem('todoItems');

    if (savedItems) {
      arr = JSON.parse(savedItems);
    }

    return arr;
  },
};

export default createStore({
  /** global data */
  state: { todoItems: storage.fetch() },

  /** operated State get, computed */
  getters,

  /** operating State, methods */
  mutations,

  /** related async logic  */
  actions: {},
});
