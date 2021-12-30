<template>
  <div class="navigation-wrapper">
    <div
      ref="navigation"
      class="navigation-container"
      :class="{ 'navigation-container--active': navigationOpen }"
    >
      <Routes />
    </div>
  </div>
</template>

<script>
import { Routes } from '@/components'

export default {
  name: 'Navigation',
  components: { Routes },
  data: () => {
    return {
      navigationOpen: false
    }
  }
}
</script>

<style lang="scss">
.navigation-wrapper {
  background-color: white;
  bottom: 0;
  box-shadow: 0 -10px 20px 0 rgba(69, 67, 96, 0.1);
  left: 0;
  position: fixed;
  right: 0;
  z-index: 11;

  @include media-breakpoint-up(md) {
    position: relative;
  }
}
</style>
