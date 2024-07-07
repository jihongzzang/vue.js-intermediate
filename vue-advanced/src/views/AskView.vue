<template>
  <div>
    <p v-for="ask in fetchedAsk" :key="ask.title">
      <a :href="ask.url">{{ ask.title }}</a>
      <small>{{ ask.time_ago }} {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedAsk']),
  },

  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>

<!-- data() {
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
  }, -->
