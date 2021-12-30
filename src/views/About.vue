<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-12" v-if="isMobile">
          <SectionHeader :heading="data.headings.about" />
        </div>
        <div class="col-md-4" v-if="!isMobile"><Avatar :fill="avatarBg" /></div>
        <div class="col-md-8">
          <RoundedContainer hasArrow>
            <p v-for="(intro, index) in data.intro" :key="index">{{ intro }}</p>
            <DownloadCV />
          </RoundedContainer>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <SkillsList
            :skills="data.skills"
            v-observe-visibility="visibilityOptions"
            style="opacity: 0"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <SectionHeader
            :heading="data.headings.experience"
            v-observe-visibility="visibilityOptions"
            style="opacity: 0"
          />
        </div>
        <div class="col-md-6" v-if="isMobile">
          <RoundedContainer
            v-observe-visibility="visibilityOptions"
            style="opacity: 0"
          >
            <Timeline :experiences="data.experiences" />
          </RoundedContainer>
        </div>
        <div
          v-else
          class="col-md-6"
          v-for="experiences in splitExperiences"
          :key="experiences.id"
        >
          <RoundedContainer
            v-observe-visibility="visibilityOptions"
            style="opacity: 0"
          >
            <Timeline :experiences="experiences" />
          </RoundedContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import types from '@/store/types'
import data from '@/assets/data/site.json'
import variables from '@/assets/scss/_exports.scss'
import {
  DownloadCV,
  SectionHeader,
  RoundedContainer,
  SkillsList,
  Timeline
} from '@/components'
import ViewportAnimations from '@/mixins'

const Avatar = () => import('@/components/Avatar.vue')

export default {
  name: 'About',
  components: {
    Avatar,
    RoundedContainer,
    DownloadCV,
    SectionHeader,
    SkillsList,
    Timeline
  },
  mixins: [ViewportAnimations],
  props: {
    static: {
      default() {
        return Object.assign(types)
      }
    }
  },
  beforeMount() {
    this.data = data.pages.about
  },
  data() {
    return {
      splitExperiences: []
    }
  },
  mounted() {
    this.splitExperiences = this.chunkArray(this.data.experiences, 2)
  },
  methods: {
    visibilityChanged(visible, observer) {
      const $ref1 = observer.target

      if (visible && !$ref1.dataset.visible) {
        this.fadeIn($ref1)
        $ref1.dataset.visible = true
      }
    },
    chunkArray(arr, n) {
      const chunkLength = Math.max(arr.length / n, 1)
      const chunks = []
      for (let i = 0; i < n; i += 1) {
        if (chunkLength * (i + 1) <= arr.length)
          chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)))
      }
      return chunks
    }
  },
  computed: {
    avatarBg() {
      return variables['dark-purple']
    },
    isMobile() {
      return this.$store.state.viewport === this.static.MOBILE
    }
  }
}
</script>
