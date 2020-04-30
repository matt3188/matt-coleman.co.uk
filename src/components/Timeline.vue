<template>
  <ul class="list horizontal--list">
    <li class="experience" v-for="exp in experiences" :key="exp.id">
      <small class="date">{{ exp.date }}</small>
      <h3 class="job-title">{{ exp.jobTitle }}</h3>
      <span class="company">{{ exp.company }}</span>
      {{ exp.description }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Timeline',
  data: () => ({
    experiences: [
      {
        id: 0,
        date: 'Feb 2019 - Present',
        jobTitle: 'Lead Front-end Developer',
        company: 'Compnay',
        description: 'Lorem ipsum',
      },
      {
        id: 1,
        date: '',
        jobTitle: 'Senior Front-end Developer',
        company: 'Compnay',
        description: 'Lorem ipsum',
      },
    ],
  }),
};
</script>

<style lang="scss">
.experience {
  margin: 0 0 25px;

  .date {
    color: #8b88b1;
    font-size: 14px;
  }
  .job-title {
    font-size: 20px;
    margin: 10px 0;
  }
  .description {
    margin: 0;
  }
}
</style>
