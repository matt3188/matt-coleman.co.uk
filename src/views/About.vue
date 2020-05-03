<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-12" v-if="isMobile">
          <section-header heading="About me" />
        </div>
        <div class="col-md-4" v-if="!isMobile"><Avatar :fill="avatarBg" /></div>
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
          <SkillsList
            :skills="skills"
            v-observe-visibility="visibilityOptions"
            style="opacity: 0;"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <section-header
            heading="Experiences"
            v-observe-visibility="visibilityOptions"
            style="opacity: 0;"
          />
        </div>
        <div class="col-md-6" v-if="isMobile">
          <RoundedContainer v-observe-visibility="visibilityOptions" style="opacity: 0;">
            <Timeline :experiences="experiences" />
          </RoundedContainer>
        </div>
        <div v-else class="col-md-6" v-for="experiences in splitExperiences" :key="experiences.id">
          <RoundedContainer v-observe-visibility="visibilityOptions" style="opacity: 0;">
            <Timeline :experiences="experiences" />
          </RoundedContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import types from '@/store/types';
import variables from '@/assets/scss/_variables.scss';
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import RoundedContainer from '@/components/RoundedContainer.vue';
import SkillsList from '@/components/SkillsList.vue';
import Timeline from '@/components/Timeline.vue';
import ViewportAnimations from '@/mixins';

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
  mixins: [ViewportAnimations],
  props: {
    static: {
      default() {
        return Object.assign(types);
      },
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      splitExperiences: [],
      skills: [
        { name: 'HTML', level: 90, colour: variables.yellow },
        { name: 'CSS', level: 90, colour: variables['coral-red'] },
        { name: 'Javascript', level: 80, colour: variables.purple },
      ],
      experiences: [
        {
          id: 0,
          date: 'May 2019 - Present',
          role: 'Lead Front-end Developer',
          company: 'Radley Yeldar',
          description:
            'After proving myself as an integral part of the team, RY promoted me to Lead front-end.',
        },
        {
          id: 1,
          date: 'Feb 2019 - May 2019',
          role: 'Senior Front-end Developer',
          company: 'Radley Yeldar',
          description:
            "Thrown in at the deep end on one of the world's top law firms Sitecore builds.",
        },
        {
          id: 2,
          date: 'Feb 2018 - Feb 2019',
          role: 'Senior Client-side Engineer',
          company: 'Dare',
          description:
            'Led the front-end on a huge digital transformation for one of Europes largest banks.',
        },
        {
          id: 3,
          date: 'May 2017 - Feb 2018',
          role: 'UI Developer',
          company: 'Spindrift',
          description:
            'Mostly worked on-site with their clients, helping them to grow their digital prescence.',
        },
        {
          id: 4,
          date: 'Sept 2015 - Apr 2017',
          role: 'Front-end Developer',
          company: 'Dennis Publishing',
          description:
            'Worked on their entire range of in-house magazines that have supporting websites.',
        },
        {
          id: 5,
          date: 'Aug 2014 - Aug 2015',
          role: 'Digital Designer',
          company: 'Adnostic',
          description: 'Designing and building interactive adverts for a plethora of clients.',
        },
      ],
    };
  },
  mounted() {
    this.splitExperiences = this.chunkArray(this.experiences, 2);
  },
  methods: {
    visibilityChanged(visible, observer) {
      const $ref1 = observer.target;

      if (visible && !$ref1.dataset.visible) {
        this.fadeIn($ref1);
        $ref1.dataset.visible = true;
      }
    },
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
    isMobile() {
      return this.$store.state.viewport === this.static.MOBILE;
    },
  },
};
</script>
