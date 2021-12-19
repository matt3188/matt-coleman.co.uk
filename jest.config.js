module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: [
    '/node_modules/(?!vue-typed-js/src/components/VueTypedJs.vue)\\$'
  ]
}
