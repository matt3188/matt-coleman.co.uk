<template>
  <header class="section-header" :style="`text-align: ${alignment}`">
    <h2>{{ heading }}</h2>
    <slot />
  </header>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    heading: {
      type: String,
      required: true
    },
    alignment: String
  }
}
</script>

<style lang="scss">
.section-header {
  font-size: 25px;
  text-align: left;
  margin: 20px 0 20px;

  @include media-breakpoint-up(md) {
    margin-top: 70px;
  }
}
</style>
