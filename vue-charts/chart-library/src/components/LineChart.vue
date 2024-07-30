<template>
  <canvas ref="lineChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  mounted() {
    new this.$_Chart(this.$refs.lineChart.getContext('2d'), {
      type: 'line',

      data: this.data,

      options: {
        responsive: false,

        onClick: (event) => {
          this.$emit('lineChartEvent', event);
        },
      },
    });
  },
};
</script>

<style></style>
