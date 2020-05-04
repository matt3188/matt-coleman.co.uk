<template>
  <div class="home">
    <Hero :name="data.name" :btnLabel="data.btnLabel" :typedList="data.whatAmI" />
  </div>
</template>

<script>
import data from '@/assets/data/site.json';
import Hero from '@/components/Hero.vue';

export default {
  name: 'Home',
  components: {
    Hero,
  },
  beforeMount() {
    this.data = data.pages.home;
  },
};
</script>
