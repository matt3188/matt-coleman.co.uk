<template>
  <div class="navigation-wrapper">
    <div
      ref="navigation"
      class="navigation-container"
      :class="{ 'navigation-container--active': navigationOpen }"
    >
      <!-- <NavToggle @trigger-menu="openMenu" /> -->
      <Routes />
    </div>
  </div>
</template>

<script>
import Routes from '@/components/Routes.vue';
// import NavToggle from '@/components/NavToggle.vue';

export default {
  name: 'Navigation',
  components: { Routes /* , NavToggle */ },
  data: () => {
    return {
      navigationOpen: false,
    };
  },
  // methods: {
  //   openMenu() {
  //     this.navigationOpen = !this.navigationOpen;
  //   },
  // },
};
</script>

<style lang="scss">
.navigation-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @include media-breakpoint-up(md) {
    position: relative;
  }
}
</style>
