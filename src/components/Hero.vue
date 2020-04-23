<template>
  <div class="hero-wrapper">
    <div class="avatar-wrapper">
      <img src="@/assets/images/avatar-1.svg" />
    </div>
    <h2 class="name">Matt Coleman</h2>
    <vue-typed-js
      :loop="true"
      :startDelay="1000"
      :backSpeed="50"
      :backDelay="2000"
      :strings="whatAmI"
    >
      <p><span class="typing"></span></p>
    </vue-typed-js>

    <SocialIconList />
    <button class="btn btn__standard" @click="hireMe">Hire me</button>
  </div>
</template>

<script>
import SocialIconList from '@/components/SocialIconList.vue';

export default {
  name: 'Hero',
  data() {
    return {
      whatAmI: [],
    };
  },
  components: {
    SocialIconList,
  },
  beforeMount() {
    this.whatAmI = [
      "I'm a Front-end Developer",
      "I'm a Cyling enthusiast",
      "I'm a Coffee lover",
      "I'm a collector of LEGO",
    ];
  },
  methods: {
    hireMe() {
      this.$router.push({ name: 'Contact' });
    },
  },
};
</script>

<style lang="scss">
.hero-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.name {
  font-weight: 700;
}
.btn {
  margin-top: 25px;
}
</style>
