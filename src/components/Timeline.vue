<template>
  <ul class="list horizontal--list">
    <li v-for="exp in experiences" :key="exp.id">
      <Experience v-bind="exp" />
    </li>
  </ul>
</template>

<script>
import Experience from '@/components/Experience.vue';

export default {
  name: 'Timeline',
  components: { Experience },
  data: () => ({
    experiences: [
      {
        id: 0,
        date: 'May 2019 - Present',
        role: 'Lead Front-end Developer',
        company: 'Radley Yeldar',
        description: 'Lorem ipsum',
      },
      {
        id: 1,
        date: 'Feb 2019 - May 2019',
        role: 'Senior Front-end Developer',
        company: 'Radley Yeldar',
        description: 'Lorem ipsum',
      },
      {
        id: 2,
        date: 'Feb 2018 - Feb 2019',
        role: 'Senior Client-side Engineer',
        company: 'Dare',
        description: 'Lorem ipsum',
      },
      {
        id: 3,
        date: 'May 2017 - Feb 2018',
        role: 'UI Developer',
        company: 'Spindrift',
        description: 'Lorem ipsum',
      },
      {
        id: 4,
        date: 'Sept 2015 - Apr 2017',
        role: 'Front-end Developer',
        company: 'Dennis Publishing',
        description: 'Lorem ipsum',
      },
      {
        id: 5,
        date: 'Aug 2014 - Aug 2015',
        role: 'Digital Designer',
        company: 'Adnostic',
        description: 'Lorem ipsum',
      },
    ],
  }),
};
</script>
