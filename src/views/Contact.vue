<template>
  <div class="contact">
    <div class="container">
      <div class="row" v-if="!formSubmitted">
        <div class="col-md-12">
          <SectionHeader :heading="data.heading" />
        </div>
        <div class="col-md-4">
          <h2>{{ data.subHeading }}</h2>
        </div>
        <div class="col-md-8">
          <ContactForm :formData="data.formData" />
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-md-12">
          <SectionHeader
            alignment="center"
            heading="Thank you for getting in touch"
          >
            <AnimatedTick
              ref="animatedTick"
              class="svg-icon"
              :class="{ 'is-valid': tickVisible }"
            />
          </SectionHeader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/assets/data/site.json'
import ContactForm from '@/components/ContactForm.vue'
import SectionHeader from '@/components/SectionHeader.vue'

const AnimatedTick = () => import('@/components/AnimatedTick.vue')

export default {
  name: 'Contact',
  components: {
    AnimatedTick,
    ContactForm,
    SectionHeader
  },
  data: () => ({
    tickVisible: false
  }),
  beforeMount() {
    this.data = data.pages.contact
  },
  mounted() {
    const tick = this.$refs.animatedTick
    if (tick !== undefined) {
      setTimeout(() => {
        this.tickVisible = true
      }, 1000)
    }
  },
  computed: {
    formSubmitted() {
      return window.location.search.indexOf('success') >= 0
    }
  }
}
</script>

<style scoped lang="scss">
.svg-icon {
  width: 100px;
  height: 100px;
}

.section-header {
  margin-top: 0;
}
</style>
