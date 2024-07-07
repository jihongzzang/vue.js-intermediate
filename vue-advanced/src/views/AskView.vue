<template>
  <div>
    <p v-for="ask in fetchedAsk" :key="ask.title">
      <router-link :to="`item/${ask.id}`">{{ ask.title }}</router-link>
      <small>
        {{ ask.time_ago }} by
        {{ ask.user }}
      </small>
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
