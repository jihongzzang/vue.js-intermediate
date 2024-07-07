<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';

import bus from '@/utils/bus';

export default {
  components: { ListItem },

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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>

<!-- data() {
    return {
      jobs: [],
    };
  },

  created() {
    fetchList('jobs')
      .then((res) => (this.jobs = res.data))
      .catch((err) => {
        console.log(err);
      });
  }, -->

<!-- computed: {
    ...mapGetters(['fetchedJobs']),
  },

  created() {
    this.$store.dispatch('FETCH_JOBS');
  }, -->
