<template>
  <div>
    <p v-for="news in fetchedNews" :key="news.title">
      <a :href="news.url"> {{ news.title }}</a>
      <small>
        {{ news.time_ago }} by
        <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedNews']),

    // #2
    // ...mapState({ news: (state) => state.news }),

    // #1
    // news() {
    //   return this.$store.state.news;
    // },
  },

  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>

<!-- data() {
    return {
      users: [],
    };
  }, -->

<!-- created() {
    console.log(this); //Vue Component

    var vm = this; //this binding

    axios
      .get('https://api.hnpwa.com/v0/news/1.json')
      .then(function (res) {
        console.log(this); //undefined
        // vm.users = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  created() {
    fetchList('news')
      .then((res) => (this.users = res.data))
      .catch((err) => {
        console.log(err);
      });
  }, -->
