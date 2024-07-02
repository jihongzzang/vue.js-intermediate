<template>
  <div>
    <div v-for="job in jobs" :key="job.title">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchList } from '@/api';

export default {
  data() {
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
  },
};
</script>

<style></style>
