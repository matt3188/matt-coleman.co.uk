<template>
  <div class="hero-wrapper">
    <Avatar fill="#ffd25f" width="200px" />
    <h2 class="name">{{ name }}</h2>
    <VueTypedJs
      :loop="true"
      :startDelay="1000"
      :backSpeed="50"
      :backDelay="2000"
      :strings="typedList"
    >
      <p><span class="typing"></span></p>
    </VueTypedJs>

    <SocialIconList />
    <Button btnClass="btn__standard" :onClick="hireMe">{{ btnLabel }}</Button>
  </div>
</template>

<script>
import VueTypedJs from 'vue-typed-js/src/components/VueTypedJs.vue'
import { Avatar, Button, SocialIconList } from '@/components'

export default {
  name: 'Hero',
  props: {
    name: {
      type: String
    },
    btnLabel: {
      type: String
    },
    typedList: {
      type: Array
    }
  },
  components: {
    Avatar,
    Button,
    SocialIconList,
    VueTypedJs
  },
  methods: {
    hireMe() {
      this.$router.push({ name: 'Contact' })
    }
  }
}
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
