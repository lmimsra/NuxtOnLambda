/**
 * nuxtの宣言部
 * TODO: 今後使用できるようにする
 */
const { Nuxt } = require('nuxt')
const config = require('../../nuxt.config')

config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

module.exposets = {
  nuxt,
  config
}
