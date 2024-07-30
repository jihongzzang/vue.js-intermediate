<template>
  <canvas ref="lineChart" width="400" height="400"></canvas>
</template>

<script>
import months from '@/uitls/months';

export default {
  mounted() {
    const labels = months({ count: 7 });

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    new this.$_Chart(this.$refs.lineChart.getContext('2d'), {
      type: 'line',
      data,
      options: {
        responsive: false,
      },
    });
  },
};
</script>

<style></style>
