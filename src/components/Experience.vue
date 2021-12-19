<template>
  <transition appear>
    <div
      class="experience"
      :data-index="id"
      v-observe-visibility="visibilityOptions"
    >
      <small class="date">{{ date }}</small>
      <h3 class="role">{{ role }}</h3>
      <span class="company">{{ company }}</span>
      <div>{{ description }}</div>
    </div>
  </transition>
</template>

<script>
import ViewportAnimations from '@/mixins'

export default {
  name: 'Experience',
  mixins: [ViewportAnimations],
  props: {
    id: Number,
    date: String,
    role: String,
    company: String,
    description: String
  },
  methods: {
    visibilityChanged(visible, observer) {
      const $ref1 = observer.target

      if (visible && !$ref1.dataset.visible) {
        this.fadeIn($ref1)
        $ref1.dataset.visible = true
      }
    }
  }
}
</script>

<style lang="scss">
.experience {
  opacity: 0;
  border-left: 1px solid $color-coral-red;
  padding: 0 0 25px 25px;
  position: relative;
  padding-left: 20px;

  &:before {
    background-color: $color-coral-red;
    border-radius: 50%;
    content: '';
    height: 11px;
    position: absolute;
    left: -6px;
    outline: 6px solid #fff;
    top: 4px;
    width: 11px;
  }

  .date,
  .company {
    display: block;
  }

  .date {
    color: #8b88b1;
    font-size: 14px;
    font-weight: 600;
  }
  .role {
    font-size: 20px;
    margin: 10px 0;
  }
  .description {
    margin: 0;
  }
}
</style>
