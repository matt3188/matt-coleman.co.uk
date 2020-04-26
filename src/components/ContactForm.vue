<template>
  <form class="form" v-on:submit.prevent="submitForm">
    <div v-for="(field, index) in formFields" :key="index">
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
          label: 'Subject',
          type: 'text',
          name: 'subject',
          required: true,
        },
        {
          id: 'your-message',
          label: 'Your message',
          type: 'textarea',
          rows: '5',
          name: 'your_message',
          required: true,
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
