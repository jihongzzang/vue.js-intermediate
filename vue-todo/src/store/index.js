import { createStore } from 'vuex';

const storage = {
  fetch() {
    let arr = [];

    const savedItems = localStorage.getItem('todoItems');

    console.log(savedItems);

    if (savedItems) {
      arr = JSON.parse(savedItems);
    }

    console.log(arr);

    return arr;
  },
};

export default createStore({
  /** global data */
  state: { todoItems: storage.fetch() },

  /** operated State get, computed */
  getters: {},

  /** operating State, methods */
  mutations: {
    addOneItem(state, todoItem) {
      console.log(state, todoItem);
      const exists = state.todoItems.some((item) => item.item === todoItem);

      if (exists) {
        alert('이미 추가하신 항목입니다.');
        return;
      }

      const obj = { completed: false, item: todoItem };

      state.todoItems.push(obj);

      localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
    },

    removeOneItem(state, index) {
      state.todoItems.splice(index, 1);

      localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
    },

    toggleOneItem(state, index) {
      state.todoItems[index].completed = !state.todoItems[index].completed;

      localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
    },

    clearAllItems(state) {
      state.todoItems = [];
      localStorage.clear();
    },
  },

  /** related async logic  */
  actions: {},
});
