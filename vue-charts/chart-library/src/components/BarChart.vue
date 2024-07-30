<template>
  <canvas id="barChart" width="400" height="400"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js';

export default {
  mounted() {
    Chart.register(...registerables);

    const ctx = document.getElementById('barChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style></style>
