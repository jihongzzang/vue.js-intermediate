import bus from '@/utils/bus.js';

export default {
  created() {
    bus.$emit('start:spinner');

    setTimeout(() => {
      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          bus.$emit('end:spinner');
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);
  },
};
