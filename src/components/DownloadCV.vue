<template>
  <Button btnClass="btn__standard" :onClick="downloadCV">
    {{ label }}
  </Button>
</template>

<script>
import data from '@/assets/data/site.json'
import { Button } from '@/components'

export default {
  name: 'DownloadCV',
  components: { Button },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  props: {
    label: {
      type: String,
      default: 'Download CV'
    }
  },
  methods: {
    downloadCV() {
      const route = this.$router.resolve({
        path: `${this.publicPath}${data.pages.about.btn.cvPath}`
      })
      window.open(route.href, '_blank')
    }
  }
}
</script>
