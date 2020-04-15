<template>
  <div id="app">
    <Routes />
    <router-view />
  </div>
</template>

<script>
import Routes from '@/components/Routes.vue';

export default {
  name: 'App',
  components: {
    Routes,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
