<template>
  <div>
    <input type="text" v-model="todoInput" />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props, context) {
    const todoInput = ref('');

    const addTodo = () => {
      const todo = todoInput.value;
      context.emit('add', todo);
      clearTodo();
    };

    const clearTodo = () => {
      todoInput.value = '';
    };

    return { todoInput, addTodo, clearTodo };
  },
};
</script>
