<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      class="form"
      @submit.prevent="handleSubmit(onSubmit)"
      action="https://mailthis.to/mattcoleman"
      method="post"
      novalidate
      ref="contactForm"
    >
      <div v-for="field in formFields" :key="field.id">
        <FormInput
          v-model="form[field.name]"
          :label="field.label"
          :id="field.id"
          :type="field.type"
          :name="field.name"
          :value="field.name"
          :required="field.required"
          :rows="field.rows"
          @input="
            (newValue) => {
              form[field.name] = newValue;
            }
          "
        />
      </div>

      <button class="btn btn__standard" type="submit">Send</button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import FormInput from '@/components/FormInput.vue';

export default {
  name: 'ContactForm',
  components: {
    FormInput,
    ValidationObserver,
  },
  data: () => ({
    errors: {},
    formFields: [
      {
        id: 'name',
        label: 'Your Name',
        type: 'text',
        name: 'name',
        required: true,
      },
      {
        id: 'email',
        label: 'Email address',
        type: 'email',
        name: 'email',
        required: true,
      },
      {
        id: 'subject',
        label: 'What do you want to talk about?',
        type: 'text',
        name: 'subject',
        required: true,
      },
      {
        id: 'your-message',
        label: 'Your message',
        type: 'textarea',
        rows: '5',
        name: 'message',
        required: true,
      },
    ],
    form: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  }),
  methods: {
    onSubmit() {
      this.$refs.contactForm.submit();
    },
  },
};
</script>

<style lang="scss">
.form {
  > div {
    &:nth-child(1) {
      padding-right: 20px;
    }
    &:nth-child(1),
    &:nth-child(2) {
      display: inline-block;
      width: 50%;
    }
  }

  [type='submit'] {
    align-self: flex-start;
    display: flex;
  }
}
</style>
