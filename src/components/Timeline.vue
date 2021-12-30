<template>
  <ul class="list horizontal--list">
    <li v-for="exp in experiences" :key="exp.id">
      <Experience v-bind="exp" />
    </li>
  </ul>
</template>

<script>
import { Experience } from '@/components'

export default {
  name: 'Timeline',
  props: {
    experiences: Array
  },
  components: { Experience }
}
</script>
