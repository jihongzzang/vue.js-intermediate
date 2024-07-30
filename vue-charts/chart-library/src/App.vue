<template>
  <div>
    <h1>Chart.js</h1>
    <BarChart />
    <LineChart />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

import BarChart from './components/BarChart.vue';

import LineChart from './components/LineChart.vue';

export default {
  components: { BarChart, LineChart },

  mounted() {
    Chart.register(...registerables);

    const ctx = document.getElementById('myChart');

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
