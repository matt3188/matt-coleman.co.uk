<template>
  <ul class="list list--horizontal">
    <li v-for="icon in iconList" :key="icon.name">
      <a
        :href="icon.url"
        target="_blank"
        :aria-label="`Matt Coleman's ${icon.name} link`"
        rel="noreferrer"
      >
        <simple-svg-icon
          :iconType="icon.name"
          :width="iconSize"
          :height="iconSize"
          :iconColor="iconColor"
          :hoverColor="icon.hoverColor"
        />
      </a>
    </li>
  </ul>
</template>

<script>
import variables from '@/assets/scss/_exports.scss'
import { SimpleSvgIcon } from '@/components'
import { GITHUB_URL, LINKEDIN_URL, STRAVA_URL } from '@/constants'

export default {
  data() {
    return {
      iconList: [
        {
          name: 'github',
          url: GITHUB_URL,
          hoverColor: variables.github
        },
        {
          name: 'linkedin',
          url: LINKEDIN_URL,
          hoverColor: variables.linkedin
        },
        {
          name: 'strava',
          url: STRAVA_URL,
          hoverColor: variables.strava
        }
      ]
    }
  },
  components: {
    SimpleSvgIcon
  },
  computed: {
    iconColor() {
      return variables.aubergine
    },
    iconSize() {
      return '24'
    }
  }
}
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
