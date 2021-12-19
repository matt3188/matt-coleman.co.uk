<template>
  <div :class="['rounded-container', { 'has-arrow': hasArrow }]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'RoundedContainer',
  props: {
    hasArrow: Boolean
  }
}
</script>

<style lang="scss">
.rounded-container {
  background-color: $color-white;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
  margin-bottom: 50px;
  padding: 25px;
  text-align: left;

  &.has-arrow {
    position: relative;

    @include media-breakpoint-up(md) {
      &:before {
        border-bottom: 10px solid transparent;
        border-right: 15px solid #fff;
        border-top: 10px solid transparent;
        content: '';
        height: 0;
        position: absolute;
        right: 100%;
        top: 20%;
        width: 0;
      }
    }
  }
}
</style>
