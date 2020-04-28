<template>
  <ValidationProvider :name="name" slim>
    <div class="form-group" slot-scope="{ errors }">
      <input
        v-if="type !== 'textarea'"
        v-model="value"
        v-on:keyup="setValue($event, value)"
        :key="id"
        :id="id"
        class="form-control"
        :type="type"
        :name="name"
        :required="required"
      />
      <textarea
        v-else
        v-model="value"
        :id="id"
        class="form-control"
        :type="type"
        :name="name"
        :required="required"
        :rows="rows"
      />
      <label :for="id">{{ label }}</label>
      <transition name="fade">
        <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
      </transition>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required',
});
extend('email', email);

export default {
  name: 'FormInput',
  components: { ValidationProvider },
  props: {
    label: String,
    id: String,
    type: String,
    name: String,
    required: Boolean,
    rows: String,
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    /**
     * Method to set value of email type so
     * I can move the label properly if the
     * value exists but it's not valid
     */
    setValue(event, value) {
      if (event.target.type === 'email') {
        return event.target.setAttribute('value', value);
      }
      return false;
    },
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    },
  },
};
</script>

<style lang="scss">
.form {
  &-group {
    color: rgba(#454360, 0.5);
    display: flex;
    flex-direction: column;
    margin: 0 0 35px;
    position: relative;

    label {
      line-height: 1;
      margin: 0;
      padding: 20px 30px;
      position: absolute;
      transition: transform 0.5s, padding 0.5s;
    }
  }

  &-control {
    border-radius: 30px;
    border: 0;
    box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
    color: #454360;
    font-size: 16px;
    line-height: 1;
    outline: 0;
    padding: 20px 30px;
    transition: box-shadow 0.5s;
    width: 100%;

    &:valid,
    &:focus,
    &[value]:not([value='']) {
      + label {
        padding: 10px 15px;
        transform: translate3d(0, -100%, 0);
      }
    }

    &:focus {
      box-shadow: 0 0 10px 0 rgba($color-aubergine, 0.5);
    }
  }

  .invalid-feedback {
    display: block;
    font-size: 80%;
    padding: 5px 30px;
    text-align: left;
  }
}
</style>
