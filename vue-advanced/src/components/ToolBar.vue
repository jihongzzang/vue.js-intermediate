<template>
  <div class="header">
    <router-link to="/news">News</router-link> | <router-link to="/ask">Asks</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
.header {
  color: white;
  background: #42b883;
  display: flex;
  padding: 8px;
}

.header .router-link-exact-active {
  color: #35495e;
}

.header a {
  color: white;
}
</style>
