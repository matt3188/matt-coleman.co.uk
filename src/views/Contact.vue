<template>
  <div class="contact">
    <div class="container">
      <div class="col-md-8">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Contact',
  components: {
    ContactForm,
  },
};
</script>
