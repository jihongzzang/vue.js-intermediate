import bus from '@/utils/bus.js';

export default {
  // 재사용 할 컴포넌트 옵션 & 로직

  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch('FETCH_LIST', this.$route.name)
  //       .then(() => {
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, 500);
  // },

  mounted() {
    bus.$emit('end:spinner');
  },
};
