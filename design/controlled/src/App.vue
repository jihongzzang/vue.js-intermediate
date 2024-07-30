<template>
  <div>
    <p>
      {{ checked }}
    </p>
    <check-box v-model="checked" @input="toggleCheckBox"></check-box>
  </div>
</template>

<script>
import CheckBox from '@/components/CheckBox.vue';

export default {
  components: {
    CheckBox,
  },
  data() {
    return {
      checked: false,
    };
  },

  methods: {
    toggleCheckBox(value) {
      this.checked = value;
    },
  },
};
</script>
