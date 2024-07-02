<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem" />
    <TodoList :propsdata="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem" />
    <TodoFooter @clearAll="clearAllItems" />
  </div>
</template>

<script>
import TodoHeader from './components/refactored/TodoHeader.vue';
import TodoInput from './components/refactored/TodoInput.vue';
import TodoList from './components/refactored/TodoList.vue';
import TodoFooter from './components/refactored/TodoFooter.vue';

export default {
  data() {
    return {
      todoItems: [],
    };
  },

  methods: {
    addOneItem(todoItem) {
      const exists = this.todoItems.some((item) => item.item === todoItem);

      if (exists) {
        alert('이미 추가하신 항목입니다.');
        return;
      }

      const obj = { completed: false, item: todoItem };
      this.todoItems.push(obj);
      this.saveTodoItems();
    },

    removeOneItem(index) {
      this.todoItems.splice(index, 1);
      this.saveTodoItems();
    },

    toggleOneItem(index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      this.saveTodoItems();
    },

    clearAllItems() {
      this.todoItems = [];
      localStorage.clear();
    },

    saveTodoItems() {
      localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
    },

    loadTodoItems() {
      const savedItems = localStorage.getItem('todoItems');

      if (savedItems) {
        try {
          this.todoItems = JSON.parse(savedItems);
        } catch (e) {
          console.error('Error loading items from localStorage', e);
          this.todoItems = [];
        }
      }
    },
  },

  created() {
    this.loadTodoItems();
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
