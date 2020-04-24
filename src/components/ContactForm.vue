<template>
  <form v-on:submit.prevent="submitForm">
    <div class="contact-form" v-for="(field, index) in formFields" :key="index">
      <FormInput
        v-model="form[field.name]"
        :label="field.label"
        :id="field.id"
        :type="field.type"
        :name="field.name"
        :value="field.name"
        @input="
          (newValue) => {
            form[field.name] = newValue;
          }
        "
      />
    </div>

    <button type="submit">Send</button>
  </form>
</template>

<script>
import FormInput from '@/components/FormInput.vue';

export default {
  name: 'ContactForm',
  components: {
    FormInput,
  },
  data() {
    return {
      formFields: [
        {
          id: 'your_name',
          label: 'Your Name',
          type: 'text',
          name: 'your_name',
        },
        {
          id: 'email',
          label: 'Email address',
          type: 'email',
          name: 'email',
        },
        {
          id: 'subject',
          label: 'Subject',
          type: 'text',
          name: 'subject',
        },
        {
          id: 'your-message',
          label: 'Your message',
          type: 'textarea',
          name: 'your_message',
        },
      ],
      form: {
        your_name: '',
        email: '',
        subject: '',
        your_message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.form);
    },
  },
};
</script>

<style></style>
