<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="`${item}-${index}`">
      <span>{{ item }}</span>
      <button @click="removeTodo(item, index)">삭제</button>
    </li>
  </ul>
</template>

<script>
// import { watch } from 'vue';
export default {
  props: ['todoItems'],

  setup(props, context) {
    const removeTodo = (item, index) => {
      context.emit('remove', item, index);
    };

    //react useEffect 와 비슷하다. sideEffect
    // watch(props.todoItems, (newValue) => {
    //   console.log({ newValue });
    // });

    return { removeTodo };
  },
};
</script>
