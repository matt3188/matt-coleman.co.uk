<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    viewBox="0 0 37 37"
    style="enable-background: new 0 0 37 37"
    xml:space="preserve"
  >
    <path
      class="circ path"
      d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
    />
    <polyline class="tick path" points="11.6,20 15.9,24.2 26.4,13.8 " />
  </svg>
</template>

<script>
export default {
  name: 'AnimatedTick'
}
</script>

<style lang="scss">
.circ,
.tick {
  fill: none;
  stroke-linejoin: round;
  stroke: $color-teal;
  stroke-width: 3;
}

.circ {
  opacity: 0;
  stroke-dasharray: 130;
  stroke-dashoffset: 130;
  stroke-miterlimit: 10;
  transition: all 1s 0.5s;
}

.tick {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  stroke-miterlimit: 10;
  transition: stroke-dashoffset 1s ease-out;
}

.svg-icon {
  &.is-valid .path {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}
</style>
