<template>
  <nav class="router">
    <ul class="router__list">
      <li v-for="(route, index) in routes" v-bind:key="index">
        <router-link class="router__link" :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Routes',
  beforeMount() {
    this.routes = this.$router.options.routes;
  },
};
</script>

<style lang="scss">
.router {
  &__list {
    display: flex;
    justify-content: center;
    padding: 30px;

    li {
      list-style: none;
    }
  }

  &__link {
    color: #2c3e50;
    font-weight: bold;
    padding: 10px 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
