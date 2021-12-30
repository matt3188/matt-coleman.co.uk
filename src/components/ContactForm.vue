<template>
  <ValidationObserver ref="form" slim>
    <form
      class="form"
      action="https://mailthis.to/mattcoleman"
      method="post"
      novalidate
      ref="contactForm"
    >
      <template v-for="field in formData.formFields">
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
            newValue => {
              form[field.name] = newValue
            }
          "
        />
      </template>

      <input type="hidden" name="_subject" value="Contact form submission" />
      <input type="hidden" name="_after" :value="`${formLocation}?success`" />
      <input type="hidden" name="_honeypot" value="" />

      <Button :onClick="onSubmit" class="btn__standard" type="submit">
        {{ btnLabel }}
      </Button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { Button, FormInput } from '@/components'

export default {
  name: 'ContactForm',
  components: {
    Button,
    FormInput,
    ValidationObserver
  },
  props: {
    formData: Object
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    isSending: false,
    form: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }),
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (!this.isSending) {
        this.$refs.form.validate().then(success => {
          if (!success) {
            return
          }
          this.isSending = true
          this.$refs.contactForm.submit()
        })
      }
    }
  },
  computed: {
    btnLabel() {
      const label = this.formData.submitBtn
      return this.isSending ? label.submitting : label.send
    },
    formLocation() {
      return window.location.href
    }
  }
}
</script>

<style lang="scss">
.form {
  margin-top: 20px;

  [type='submit'] {
    @include media-breakpoint-down(sm) {
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
