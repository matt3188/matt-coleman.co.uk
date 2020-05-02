<template>
  <header class="section-header" :style="`text-align: ${alignment}`">
    <h2>{{ heading }}</h2>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    heading: {
      type: String,
      required: true,
    },
    alignment: String,
  },
};
</script>

<style lang="scss">
.section-header {
  font-size: 25px;
  margin: 70px 0 20px;
  text-align: left;
}
</style>
