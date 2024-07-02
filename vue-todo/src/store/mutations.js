const addOneItem = (state, todoItem) => {
  const exists = state.todoItems.some((item) => item.item === todoItem);

  if (exists) {
    alert('이미 추가하신 항목입니다.');
    return;
  }

  const obj = { completed: false, item: todoItem };

  state.todoItems.push(obj);

  localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
};

const removeOneItem = (state, payload) => {
  const { index } = payload;

  state.todoItems.splice(index, 1);

  localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
};

const toggleOneItem = (state, payload) => {
  const { index } = payload;

  state.todoItems[index].completed = !state.todoItems[index].completed;

  localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
};

const clearAllItems = (state) => {
  state.todoItems = [];
  localStorage.clear();
};

export { addOneItem, toggleOneItem, removeOneItem, clearAllItems };
