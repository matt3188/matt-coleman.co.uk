<template>
  <div class="home">
    <Hero :name="name" :btnLabel="btnLabel" :typedList="whatAmI" />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'Home',
  components: {
    Hero,
  },
  data() {
    return {
      name: 'Matt Coleman',
      btnLabel: 'Hire me',
      whatAmI: [
        "I'm a Front-end Developer",
        "I'm a Cyling enthusiast",
        "I'm a Coffee lover",
        "I'm a collector of LEGO",
      ],
    };
  },
};
</script>

<style lang="scss"></style>
