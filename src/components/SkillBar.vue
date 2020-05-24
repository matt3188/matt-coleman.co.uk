<template>
  <div class="skill-bar-container">
    <div class="skill-labels">
      <span class="title">{{ title }}</span
      ><span class="skill-level">{{ skillLevel() }}</span>
    </div>
    <div class="skill-bar">
      <transition appear @before-enter="beforeEnter">
        <div
          class="skill-bar-progress"
          :data-index="index"
          :style="`background-color: ${color}`"
          v-observe-visibility="visibilityOptions"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
import ViewportAnimations from '@/mixins';

export default {
  name: 'SkillBar',
  mixins: [ViewportAnimations],
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
    visibilityChanged(visible, observer) {
      const $ref1 = observer.target;

      if (visible && !$ref1.dataset.visible) {
        this.animateWidth($ref1, null, this.skillLevel());
        $ref1.dataset.visible = true;
      }
    },
    beforeEnter(el) {
      const element = el;
      element.style.width = 0;
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
