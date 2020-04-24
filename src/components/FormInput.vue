<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input v-if="type !== 'textarea'" :id="id" class="form-control" :type="type" :name="name" />
    <textarea v-else :id="id" class="form-control" :type="type" :name="name" />
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: String,
    id: String,
    type: String,
    name: String,
  },
};
</script>

<style lang="scss">
.form {
  &-group {
    display: flex;
  }
}
</style>
