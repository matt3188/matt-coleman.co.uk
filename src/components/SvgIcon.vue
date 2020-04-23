<template>
  <div :style="iconStyle">
    <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g :fill="iconColor">
        <path :d="path" />
      </g>
    </svg>
  </div>
</template>

<script>
import ICONS from '@/components/icons';

export default {
  name: 'SvgIcon',
  props: {
    iconType: {
      type: String,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },

    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
  },
  computed: {
    iconStyle() {
      const { width, height } = this;
      return {
        width: `${width}px`,
        height: `${height}px`,
      };
    },
    path() {
      return ICONS[this.iconType];
    },
  },
};
</script>
