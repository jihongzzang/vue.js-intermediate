<template>
  <div>
    <div v-for="ask in asks" :key="ask.title">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchList } from '@/api';

export default {
  data() {
    return {
      asks: [],
    };
  },

  created() {
    fetchList('ask')
      .then((res) => (this.asks = res.data))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
