<template>
  <div>
    <section>
      <UserProfile :info="item">
        <router-link slot="username" :to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
        <template slot="time">posted {{ item.time_ago }} </template>
      </UserProfile>
    </section>
    <section>
      <h2>
        {{ item.title }}
      </h2>
    </section>
    <section>
      <div v-html="item.content" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import UserProfile from '@/components/UserProfile.vue';

export default {
  components: { UserProfile },

  computed: {
    ...mapGetters({ item: 'fetchedItem' }),
  },

  created() {
    const itemId = this.$route.params.id;

    this.$store.dispatch('FETCH_ITEM', itemId);
  },
};
</script>

<style scoped></style>
