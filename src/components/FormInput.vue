<template>
  <div class="form-group">
    <input
      v-if="type !== 'textarea'"
      v-model="value"
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
  </div>
</template>

<script>
export default {
  name: 'FormInput',
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
    position: relative;

    label {
      position: absolute;
      line-height: 1;
      margin: 0;
      padding: 20px 30px;
      transition: transform 0.5s, padding 0.5s;
    }
  }

  &-control {
    border: 0;
    border-radius: 30px;
    box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
    color: #454360;
    font-size: 16px;
    line-height: 1;
    margin: 0 0 35px;
    outline: 0;
    padding: 20px 30px;
    transition: box-shadow 0.5s;
    width: 100%;

    &:valid,
    &:focus {
      + label {
        transform: translate3d(0, -100%, 0);
        padding: 10px 15px;
      }
    }

    &:focus {
      box-shadow: 0 0 10px 0 rgba($color-aubergine, 0.5);
    }
  }
}
</style>
