import ListView from '@/views/ListView.vue';

import bus from '@/utils/bus';

export default function createListView(name) {
  // 재사용할 인스턴스 옵션들이 들어갈 자리

  console.log(name);
  return {
    name,

    created() {
      bus.$emit('start:spinner');

      setTimeout(() => {
        this.$store
          .dispatch('FETCH_LIST', name)
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
          })
          .catch((err) => {
            console.log(err);
          });
      }, 500);
    },

    render(createElement) {
      return createElement(ListView);
    },
  };
}
