<template>
  <div id="app">
    <Navigation />
    <transition name="overlay-left-full" mode="out-in">
      <router-view class="page-view" />
    </transition>
    <div class="overlay-right"></div>
    <div class="overlay-left"></div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.transition = to.meta.transition;
      next();
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.overlay-left,
.overlay-right {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 0;
  background: $color-aubergine;
  transition-duration: 0.3s;
}
.overlay-left {
  right: 0;
}
.overlay-right {
  left: 0;
}
</style>
