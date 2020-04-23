<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-4"><Avatar :fill="avatarBg" width="200px" /></div>
        <div class="col-md-8">
          <div class="arrowed-container">
            <p>
              I'm Matt Coleman, I'm a strong and passionate front-end developer with good
              communication skills and a keen eye for detail. My philosophy is, if something is
              worth doing, it's worth doing right.
            </p>
            <p>
              I have a background in design, which allows me to bridge the gap between design and
              development within a team. I like to create modular, portable code with a DRY approach
              and I also try and future proof my code as best I can.
            </p>
            <a :href="`${publicPath}pdf/MLC_CV_2020.pdf`" target="_blank" class="btn btn__standard">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <SkillsList :skills="skills" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import variables from '@/assets/scss/_variables.scss';
import Avatar from '@/components/Avatar.vue';
import SkillsList from '@/components/SkillsList.vue';

export default {
  name: 'About',
  components: {
    SkillsList,
    Avatar,
  },
  data() {
    return {
      skills: [],
      publicPath: process.env.BASE_URL,
    };
  },
  mounted() {
    this.skills = [
      { name: 'HTML', level: 90, colour: variables.yellow },
      { name: 'CSS', level: 90, colour: variables.coralRed },
      { name: 'Javascript', level: 80, colour: variables.purple },
    ];
  },
  computed: {
    avatarBg() {
      return variables.aubergine;
    },
  },
};
</script>

<style lang="scss">
.arrowed-container {
  background-color: $color-white;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
  margin-bottom: 50px;
  padding: 25px;
  position: relative;
  text-align: left;

  @include media-breakpoint-up(md) {
    &:before {
      border-bottom: 10px solid transparent;
      border-right: 15px solid #fff;
      border-top: 10px solid transparent;
      content: '';
      height: 0;
      position: absolute;
      right: 100%;
      top: 20%;
      width: 0;
    }
  }
}

.list {
  &--vertical {
    li {
      margin: 0 0 10px;
    }
  }
}
</style>
