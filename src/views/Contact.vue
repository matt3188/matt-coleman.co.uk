<template>
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <section-header heading="Get in touch"></section-header>
        </div>
        <div class="col-md-4">
          <h2>Let's talk</h2>
        </div>
        <div class="col-md-8">
          <ContactForm v-if="!formSubmitted" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: 'Contact',
  components: {
    ContactForm,
    SectionHeader,
  },
  computed: {
    formSubmitted() {
      return window.location.search.indexOf('success') >= 0;
    },
  },
};
</script>
