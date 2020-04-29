<template>
  <div class="skill-bar-container">
    <div class="skill-labels">
      <span class="title">{{ title }}</span
      ><span class="skill-level">{{ skillLevel() }}</span>
    </div>
    <div class="skill-bar">
      <transition appear @before-enter="beforeEnter" @after-appear="enter">
        <div
          class="skill-bar-progress"
          :data-index="index"
          :style="`background-color: ${color}`"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';

export default {
  name: 'SkillBar',
  props: {
    title: {
      required: true,
      type: String,
    },
    level: {
      required: true,
      type: Number,
    },
    color: {
      required: true,
      type: String,
    },
    index: {
      props: Number,
    },
  },
  methods: {
    skillLevel() {
      return `${parseInt(this.$props.level, 10)}%`;
    },
    beforeEnter(el) {
      const element = el;
      element.style.width = 0;
    },
    enter(el, done) {
      const element = el;
      const delay = element.dataset.index * 250;
      setTimeout(() => {
        Velocity(element, { width: `${this.skillLevel()}` }, { delay: 1000 }, { complete: done });
      }, delay);
    },
  },
};
</script>

<style lang="scss">
.skill-bar-container {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 20px;
}
.skill-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.title {
  font-weight: 500;
}
.skill-bar {
  background-color: $color-light-grey;
  border-radius: 10px;
}
.skill-bar-progress {
  border-radius: 10px;
  padding: 10px;
}
</style>
