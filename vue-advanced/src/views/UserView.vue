<template>
  <UserProfile :info="userInfo">
    <div slot="username">{{ userInfo.id }}</div>
    <span slot="time">{{ 'Joined ' + userInfo.created }} ,</span>
    <span slot="karma">{{ userInfo.karma }}</span>
  </UserProfile>
</template>

<script>
import { mapGetters } from 'vuex';

import UserProfile from '@/components/UserProfile.vue';

export default {
  components: { UserProfile },

  computed: {
    ...mapGetters({ userInfo: 'fetchedUser' }),
  },

  created() {
    const userName = this.$route.params.id;

    this.$store.dispatch('FETCH_USER', userName);
  },
};
</script>

<style scoped></style>
