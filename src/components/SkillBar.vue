<template>
  <div class="skill-bar-container">
    <div class="skill-labels">
      <span class="title">{{ title }}</span
      ><span class="skill-level">{{ skillLevel() }}</span>
    </div>
    <div class="skill-bar">
      <div
        class="skill-bar-progress"
        :style="`width: ${skillLevel()}; background-color: ${color}`"
      ></div>
    </div>
  </div>
</template>

<script>
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
  },
  methods: {
    skillLevel() {
      return `${parseInt(this.$props.level, 10)}%`;
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
