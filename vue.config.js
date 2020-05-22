module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/styles.scss";
        `,
      },
    },
  },
};
