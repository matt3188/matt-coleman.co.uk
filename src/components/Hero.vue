<template>
  <div class="hero-wrapper">
    <Avatar fill="#ffd25f" width="200px" />
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
    <Button btnClass="btn__standard" :onClick="hireMe">Hire me</Button>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import SocialIconList from '@/components/SocialIconList.vue';

export default {
  name: 'Hero',
  data() {
    return {
      whatAmI: [],
    };
  },
  components: {
    Avatar,
    Button,
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

  .btn {
    margin-top: 25px;
  }
}
.name {
  font-weight: 700;
}
</style>
