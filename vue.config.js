const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? 'https://github.com/koki8/account-book' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false
}