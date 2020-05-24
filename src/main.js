import Vue from 'vue';
import { throttle } from 'lodash-es';
import { ObserveVisibility } from 'vue-observe-visibility';

import '@/assets/scss/styles.scss';

import './registerServiceWorker';
import App from './App.vue';
import router from './router';
import store from './store';

// Directives
Vue.directive('observe-visibility', ObserveVisibility);

Vue.config.productionTip = false;

// eslint-disable-next-line
const vm = new Vue({
  router,
  store,
  created() {
    window.addEventListener('resize', throttle(this.windowResize, 200));
    this.$store.dispatch('setViewport');
  },
  methods: {
    windowResize() {
      this.$store.dispatch('setViewport');
    },
    visibilityChanged(visible, observer) {
      const $ref1 = observer.target;
      if (visible && !$ref1.dataset.visible) {
        $ref1.dataset.visible = true;
      }
    },
  },
  render: (h) => h(App),
}).$mount('#app');
