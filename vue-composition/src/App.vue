<template>
  <TodoHeader :appTitle="title" />
  <TodoInput @add="addTodoItem" />
  <TodoList :todoItems="todoItems" @remove="removeTodoItem" />
</template>

<script>
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';

import TodoHeader from '@/components/TodoHeader.vue';

import TodoInput from '@/components/TodoInput.vue';

import TodoList from '@/components/TodoList.vue';

export default {
  data() {
    return {
      title: '할일 앱',
    };
  },

  setup() {
    const todoItems = ref([]);

    const fetchTodos = () => {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);

        result.push(todoItem);
      }

      return result;
    };

    console.log('setup called');

    // 라이프 사이클 API : created()

    // todoItems.value = fetchTodos();

    onBeforeMount(() => {
      console.log('onBeforeMount called');
      todoItems.value = fetchTodos();
    });

    onMounted(() => {
      console.log('onMounted called');
    });

    onUnmounted(() => {
      console.log('onUnmounted called');
    });

    const addTodoItem = (todo) => {
      todoItems.value.push(todo);

      localStorage.setItem(todo, todo);
    };

    const removeTodoItem = (item, index) => {
      todoItems.value.splice(index, 1);

      localStorage.removeItem(item);
    };

    return { todoItems, addTodoItem, removeTodoItem };
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
};
</script>

<style lang="scss" scoped></style>
