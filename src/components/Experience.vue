<template>
  <transition appear @before-enter="beforeEnter" @after-appear="enter">
    <div class="experience" :data-index="id">
      <small class="date">{{ date }}</small>
      <h3 class="role">{{ role }}</h3>
      <span class="company">{{ company }}</span>
      <div>{{ description }}</div>
    </div>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate';

export default {
  name: 'Experience',
  props: {
    id: Number,
    date: String,
    role: String,
    company: String,
    description: String,
  },
  methods: {
    beforeEnter(el) {
      const element = el;
      element.style.opacity = 0;
    },
    enter(el, done) {
      const element = el;
      const delay = element.dataset.index * 150;
      setTimeout(() => {
        Velocity(element, { opacity: 1 }, { delay: 1000 }, { complete: done });
      }, delay);
    },
  },
};
</script>

<style lang="scss">
.experience {
  opacity: 0;
  border-left: 1px solid $color-coral-red;
  padding: 0 0 25px 25px;
  position: relative;
  padding-left: 20px;

  &:before {
    background-color: $color-coral-red;
    border-radius: 50%;
    content: '';
    height: 11px;
    position: absolute;
    left: -6px;
    outline: 6px solid #fff;
    top: 4px;
    width: 11px;
  }

  .date,
  .company {
    display: block;
  }

  .date {
    color: #8b88b1;
    font-size: 14px;
  }
  .role {
    font-size: 20px;
    margin: 10px 0;
  }
  .description {
    margin: 0;
  }
}
</style>
