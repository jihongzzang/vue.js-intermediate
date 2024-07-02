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

const state = { todoItems: storage.fetch() };

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addOneItem(state, todoItem) {
    const exists = state.todoItems.some((item) => item.item === todoItem);

    if (exists) {
      alert('이미 추가하신 항목입니다.');
      return;
    }

    const obj = { completed: false, item: todoItem };

    state.todoItems.push(obj);

    localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
  },

  removeOneItem(state, payload) {
    const { index } = payload;

    state.todoItems.splice(index, 1);

    localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
  },

  toggleOneItem(state, payload) {
    const { index } = payload;

    state.todoItems[index].completed = !state.todoItems[index].completed;

    localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
  },

  clearAllItems(state) {
    state.todoItems = [];
    localStorage.clear();
  },
};

export default {
  state,
  getters,
  mutations,
};
