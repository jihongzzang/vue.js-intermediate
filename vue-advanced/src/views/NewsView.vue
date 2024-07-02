<template>
  <div>
    <div v-for="user in users" :key="user">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchList } from '@/api';

export default {
  data() {
    return {
      users: [],
    };
  },

  // created() {
  //   var vm = this; //this binding
  //   axios
  //     .get(${url})
  //     .then(function (res) {
  //       vm.users = res.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  created() {
    fetchList('news')
      .then((res) => (this.users = res.data))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
