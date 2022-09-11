const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? 'https://koki8.github.io/account-book' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false
}