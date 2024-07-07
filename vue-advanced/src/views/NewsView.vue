<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';

import bus from '@/utils/bus';

export default {
  components: {
    ListItem,
  },

  created() {
    bus.$emit('start:spinner');

    setTimeout(() => {
      const name = this.$route.name;

      const actionName = `FETCH_${name.toUpperCase()}`;

      this.$store
        .dispatch(actionName)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  },
};
</script>

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

<!-- computed: {
    ...mapGetters(['fetchedNews']),
    #2
    ...mapState({ news: (state) => state.news }),
    #1
    news() {
      return this.$store.state.news;
    },
  },

  created() {
    this.$store.dispatch('FETCH_NEWS');
  }, -->
