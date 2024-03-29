module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import '~bootstrap/scss/functions';
          @import '~bootstrap/scss/variables';
          @import '~bootstrap/scss/mixins';
          @import '@/assets/scss/_variables.scss';
        `
      }
    }
  }
}
