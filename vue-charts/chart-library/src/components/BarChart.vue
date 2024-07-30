<template>
  <canvas ref="barChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  mounted() {
    new this.$_Chart(this.$refs.barChart, {
      type: 'bar',
      data: this.data,
      options: {
        responsive: false,

        scales: {
          y: {
            beginAtZero: true,
          },
        },

        onClick: (event) => {
          this.$emit('barChartEvent', event);
        },
      },
    });
  },
};
</script>

<style></style>
