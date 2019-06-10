const pkg = require('./package')
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev'
})

module.exports = {
  mode: 'universal',
  // source dir setting
  srcDir: 'app/',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  serverMiddleware: [{ path: '/api', handler: '~~/api/index.js' }],

  /*
   ** gzipをオフに
   */
  performance: {
    gzip: false
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc:https://www.npmjs.com/package/nuxt-fontawesome
    'nuxt-fontawesome',
    // Doc:https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  render: {
    /**
     * compression を通すと2重に Gzip がかかりブラウザが表示できないので
     * なにもしないミドルウェアを定義しておく
     */
    compressor: (req, res, next) => {
      next()
    }
  },

  /*
   ** 環境変数の定義
   */
  env: {
    API_URL: process.env.API_URL,
    HOST: process.env.HOST,
    PORT: process.env.PORT
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
