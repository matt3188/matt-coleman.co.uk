<template>
  <ul class="list list--horizontal">
    <li>
      <a :href="githubUrl" target="_blank"
        ><svg-icon :width="iconSize" :height="iconSize" iconType="github" :iconColor="iconColor"
      /></a>
    </li>
    <li>
      <a :href="linkedinUrl" target="_blank"
        ><svg-icon :width="iconSize" :height="iconSize" iconType="linkedin" :iconColor="iconColor"
      /></a>
    </li>
    <li>
      <a :href="stravaUrl" target="_blank"
        ><svg-icon :width="iconSize" :height="iconSize" iconType="strava" :iconColor="iconColor"
      /></a>
    </li>
  </ul>
</template>

<script>
import variables from '@/assets/scss/_variables.scss';
import SvgIcon from '@/components/SvgIcon.vue';
import { GITHUB_URL, LINKEDIN_URL, STRAVA_URL } from '@/constants';

export default {
  components: {
    SvgIcon,
  },
  computed: {
    githubUrl() {
      return GITHUB_URL;
    },
    linkedinUrl() {
      return LINKEDIN_URL;
    },
    stravaUrl() {
      return STRAVA_URL;
    },
    iconColor() {
      return variables.aubergine;
    },
    iconSize() {
      return '24';
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  li {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
