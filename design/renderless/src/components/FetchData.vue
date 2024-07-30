<script>
import axios from 'axios';

export default {
  props: ['url'],

  data() {
    return {
      response: null,
      loading: true,
    };
  },

  created() {
    axios
      .get(this.url)
      .then((response) => {
        this.response = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log('[ERROR] fetching the data', error);
      });
  },

  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default({
        response: this.response,
        loading: this.loading,
      });
    }

    return null;
  },
};
</script>
