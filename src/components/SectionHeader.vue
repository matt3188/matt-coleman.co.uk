<template>
  <header class="section-header">
    <h2>{{ heading }}</h2>
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
