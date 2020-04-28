<template>
  <button @click="onClick" :class="['btn', btnClass]" :target="target" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    btnClass: String,
    target: String,
    type: String,
  },
};
</script>
