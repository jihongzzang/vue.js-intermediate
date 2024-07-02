<template>
  <p>{{ message }}</p>
  <button type="button" @click="changeMessage">change</button>
</template>

<script>
import useMessage from './hooks/useMessage';

export default {
  setup() {
    const { message, changeMessage } = useMessage();

    return { message, changeMessage };
  },
};
</script>

<style lang="scss" scoped></style>
