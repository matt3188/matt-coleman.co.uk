<template>
  <ValidationObserver ref="form" slim>
    <form
      class="form"
      action="https://mailthis.to/mattcoleman"
      method="post"
      novalidate
      ref="contactForm"
    >
      <template v-for="field in formFields">
        <FormInput
          :key="field.id"
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
      </template>
      <input type="hidden" name="_subject" value="Contact form submission" />
      <input type="hidden" name="_after" :value="`${formLocation}?success`" />
      <input type="hidden" name="_honeypot" value="" />

      <Button :onClick="onSubmit" class="btn__standard" type="submit">{{
        isSending ? 'Sending...' : 'Send'
      }}</Button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import Button from '@/components/Button.vue';
import FormInput from '@/components/FormInput.vue';

export default {
  name: 'ContactForm',
  components: {
    Button,
    FormInput,
    ValidationObserver,
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    errors: {},
    isSending: false,
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
        label: 'Your email address',
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
    onSubmit(event) {
      event.preventDefault();
      if (!this.isSending) {
        this.$refs.form.validate().then((success) => {
          if (!success) {
            return;
          }
          this.isSending = true;
          this.$refs.contactForm.submit();
        });
      }
    },
  },
  computed: {
    formLocation() {
      return window.location.href;
    },
  },
};
</script>

<style lang="scss">
.form {
  margin-top: 20px;

  [type='submit'] {
    @include media-breakpoint-down(md) {
      width: 100%;
    }

    @include media-breakpoint-up(md) {
      align-self: flex-start;
      display: flex;
    }
  }

  label[for='subject'] {
    @media screen and (max-width: 326px) {
      padding: 14px 30px;
    }
  }
}
</style>
