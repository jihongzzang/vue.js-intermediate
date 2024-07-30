<template>
  <canvas id="lineChart" width="400" height="400"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js';

export default {
  mounted() {
    Chart.register(...registerables);

    const ctx = document.getElementById('lineChart');

    const MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    function months(config) {
      var cfg = config || {};

      var count = cfg.count || 12;

      var section = cfg.section;

      var values = [];

      var i, value;

      for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
      }

      return values;
    }

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

    new Chart(ctx, {
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
