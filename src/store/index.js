import Vue from 'vue';
import Vuex from 'vuex';

const types = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    viewport: types.MOBILE,
  },
  mutations: {
    SET_VIEWPORT(state, width) {
      state.viewport = types.MOBILE;

      // Bootstraps media breakpoints
      if (width >= 768) state.viewport = types.TABLET;
      if (width >= 1200) state.viewport = types.DESKTOP;
    },
  },
  actions: {
    setViewport({ commit }) {
      commit(
        'SET_VIEWPORT',
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      );
    },
  },
  modules: {},
});
