<template>
  <div :style="iconStyle">
    <svg
      class="svg-icon"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :fill="iconColor"
    >
      <path :d="path" />
    </svg>
  </div>
</template>

<script>
import ICONS from '@/components/icons'

export default {
  name: 'SimpleSvgIcon',
  props: {
    iconType: {
      type: String
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    hoverColor: {
      type: String,
      default: 'currentColor'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    }
  },
  computed: {
    iconStyle() {
      const { width, height } = this
      return {
        width: `${width}px`,
        height: `${height}px`,
        '--color-hover': this.hoverColor
      }
    },
    path() {
      return ICONS[this.iconType]
    }
  }
}
</script>

<style lang="scss">
.svg-icon {
  transition: fill 0.3s;

  &:hover {
    fill: var(--color-hover);
  }
}
</style>
