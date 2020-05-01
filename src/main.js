import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
import { throttle } from 'lodash';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(VueTypedJs);

Vue.config.productionTip = false;

// eslint-disable-next-line
const vm = new Vue({
  router,
  VueTypedJs,
  store,
  created() {
    window.addEventListener('resize', throttle(this.windowResize, 200));
    this.$store.dispatch('setViewport');
  },
  methods: {
    windowResize() {
      this.$store.dispatch('setViewport');
    },
  },
  render: (h) => h(App),
}).$mount('#app');
