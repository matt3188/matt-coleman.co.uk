<template>
  <nav class="router">
    <ul class="router__list">
      <li v-for="(route, index) in activeRoutes" v-bind:key="index">
        <router-link class="router__link" :to="route.path">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Routes',
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
  computed: {
    activeRoutes() {
      return this.routes.filter((route) => {
        return route.name;
      });
    },
  },
};
</script>

<style lang="scss">
.router {
  &__list {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 30px;

    li {
      list-style: none;
    }
  }

  &__link {
    color: $color-aubergine;
    padding: 10px 20px;

    &:hover,
    &.router-link-exact-active {
      color: $color-coral-red;
    }
  }
}
</style>
