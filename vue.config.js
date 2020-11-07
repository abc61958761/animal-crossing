module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  }
}