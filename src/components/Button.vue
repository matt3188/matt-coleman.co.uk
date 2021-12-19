<template>
  <button
    @click="onClick"
    :class="['btn', btnClass]"
    :target="target"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    btnClass: String,
    target: String,
    type: String
  }
}
</script>

<style lang="scss">
.btn {
  display: inline-block;
  transition: background-color 0.3s ease-in-out;

  &__standard {
    appearance: none;
    background-color: $color-coral-red;
    border-radius: 25px;
    border: 0;
    color: $color-white;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 10px 25px;

    &:focus {
      outline: 0;
      box-shadow: 0 0 10px 0 rgba($color-coral-red, 0.8);
    }

    &:hover {
      color: $color-white;
      background-color: rgba($color-coral-red, 0.9);
      text-decoration: none;
    }
  }
}
</style>
