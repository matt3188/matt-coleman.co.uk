<template>
  <button @click="triggerMenu">Open Nav</button>
</template>

<script>
export default {
  name: 'NavToggle',
  methods: {
    triggerMenu() {
      this.$emit('trigger-menu')
    }
  }
}
</script>

<style></style>
