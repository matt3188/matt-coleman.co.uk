<template>
  <div class="contact">
    <div class="container">
      <div class="row" v-if="!formSubmitted">
        <div class="col-md-12">
          <section-header heading="Get in touch"></section-header>
        </div>
        <div class="col-md-4">
          <h2>Let's talk</h2>
        </div>
        <div class="col-md-8">
          <ContactForm />
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-md-12">
          <section-header alignment="center" heading="Thank you for getting in touch">
            <AnimatedTick
              ref="animatedTick"
              class="svg-icon"
              :class="{ 'is-valid': tickVisible }"
            />
          </section-header>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedTick from '@/components/AnimatedTick.vue';
import ContactForm from '@/components/ContactForm.vue';
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: 'Contact',
  components: {
    AnimatedTick,
    ContactForm,
    SectionHeader,
  },
  data: () => ({
    tickVisible: false,
  }),
  mounted() {
    const tick = this.$refs.animatedTick;
    if (tick !== undefined) {
      setTimeout(() => {
        this.tickVisible = true;
      }, 1000);
    }
  },
  computed: {
    formSubmitted() {
      return window.location.search.indexOf('success') >= 0;
    },
  },
};
</script>

<style scoped lang="scss">
.svg-icon {
  width: 100px;
  height: 100px;
}
</style>
