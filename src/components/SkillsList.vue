<template>
  <ul class="list list--vertical">
    <li v-for="(skill, index) in this.skills" :key="index">
      <SkillBar
        :title="skill.name"
        :level="skill.level"
        :color="skillColour(skill.colour)"
        :index="index"
      />
    </li>
  </ul>
</template>

<script>
import SkillBar from '@/components/SkillBar.vue';
import variables from '@/assets/scss/_variables.scss';

export default {
  name: 'SkillsList',
  components: {
    SkillBar,
  },
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
  methods: {
    skillColour(arg) {
      const colour = arg;
      return variables[colour];
    },
  },
};
</script>
