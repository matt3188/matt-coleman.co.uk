<template>
  <div class="not-found">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <SectionHeader :heading="data.heading" alignment="center">
            <p>{{ data.subHeading }}</p>
          </SectionHeader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/assets/data/site.json';
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  beforeMount() {
    this.data = data.pages['404'];
  },
  name: 'NotFound',
  components: {
    SectionHeader,
  },
};
</script>
