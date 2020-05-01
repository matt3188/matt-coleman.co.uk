<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-4"><Avatar :fill="avatarBg" width="200px" /></div>
        <div class="col-md-8">
          <RoundedContainer hasArrow>
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
            <Button btnClass="btn__standard" :onClick="downloadCV">
              Download CV
            </Button>
          </RoundedContainer>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <SkillsList :skills="skills" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <section-header heading="Exeriences" />
        </div>

        <div class="col-md-6" v-for="experiences in splitExperiences" :key="experiences.id">
          <RoundedContainer>
            <Timeline :experiences="experiences" />
          </RoundedContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import variables from '@/assets/scss/_variables.scss';
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import RoundedContainer from '@/components/RoundedContainer.vue';
import SkillsList from '@/components/SkillsList.vue';
import Timeline from '@/components/Timeline.vue';

export default {
  name: 'About',
  components: {
    Avatar,
    Button,
    RoundedContainer,
    SectionHeader,
    SkillsList,
    Timeline,
  },
  data() {
    return {
      splitExperiences: [],
      skills: [
        { name: 'HTML', level: 90, colour: variables.yellow },
        { name: 'CSS', level: 90, colour: variables.coralRed },
        { name: 'Javascript', level: 80, colour: variables.purple },
      ],
      experiences: [
        {
          id: 0,
          date: 'May 2019 - Present',
          role: 'Lead Front-end Developer',
          company: 'Radley Yeldar',
          description: 'Lorem ipsum',
        },
        {
          id: 1,
          date: 'Feb 2019 - May 2019',
          role: 'Senior Front-end Developer',
          company: 'Radley Yeldar',
          description: 'Lorem ipsum',
        },
        {
          id: 2,
          date: 'Feb 2018 - Feb 2019',
          role: 'Senior Client-side Engineer',
          company: 'Dare',
          description: 'Lorem ipsum',
        },
        {
          id: 3,
          date: 'May 2017 - Feb 2018',
          role: 'UI Developer',
          company: 'Spindrift',
          description: 'Lorem ipsum',
        },
        {
          id: 4,
          date: 'Sept 2015 - Apr 2017',
          role: 'Front-end Developer',
          company: 'Dennis Publishing',
          description: 'Lorem ipsum',
        },
        {
          id: 5,
          date: 'Aug 2014 - Aug 2015',
          role: 'Digital Designer',
          company: 'Adnostic',
          description: 'Lorem ipsum',
        },
      ],
      publicPath: process.env.BASE_URL,
    };
  },
  mounted() {
    this.splitExperiences = this.chunkArray(this.experiences, 2);
  },
  methods: {
    downloadCV() {
      const route = this.$router.resolve({ path: `${this.publicPath}pdf/MLC_CV_2020.pdf` });
      window.open(route.href, '_blank');
    },
    chunkArray(arr, n) {
      const chunkLength = Math.max(arr.length / n, 1);
      const chunks = [];
      for (let i = 0; i < n; i += 1) {
        if (chunkLength * (i + 1) <= arr.length)
          chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
      }
      return chunks;
    },
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
</style>
