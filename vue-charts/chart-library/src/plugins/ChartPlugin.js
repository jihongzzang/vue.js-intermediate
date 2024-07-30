import { Chart, registerables } from 'chart.js';

export default {
  install(Vue) {
    /** 모든 컴포넌트에서 Chart 'this.$_Chart'를 접근하겠다. */
    Vue.prototype.$_Chart = Chart;

    Chart.register(...registerables);
  },
};
