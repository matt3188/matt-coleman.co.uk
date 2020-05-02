import Velocity from 'velocity-animate';

const ViewportAnimations = {
  computed: {
    visibilityOptions() {
      return {
        callback: this.visibilityChanged,
        intersection: {
          threshold: 0.3,
        },
      };
    },
  },
  methods: {
    fadeIn(el, done) {
      console.log(el);
      const element = el;
      const delay = element.dataset.index * 150;
      setTimeout(() => {
        Velocity(element, { opacity: 1 }, { delay: 1000 }, { complete: done });
      }, delay);
    },
  },
};

export default ViewportAnimations;
