import { createApp } from 'vue';

/** if not use Vuex */

// import App from './App.vue';

// createApp(App).mount('#app');

/** if use Vuex */

import store from './store';

import App from './AppVuex.vue';

createApp(App).use(store).mount('#app');
