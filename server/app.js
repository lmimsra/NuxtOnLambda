const express = require('express')

const { nuxt } = require('./core/nuxt')
// const { setHeadersMiddleware } = require('./middleware/header-middleware.js')
// const { loggerMiddleware } = require('./middleware/logger-middleware.js')
// const { envMiddleware } = require('./middleware/env-middleware')

const app = express()

/** header middleware */
app.use(function(req, res, next) {
  res.header('no-cache', 'Set-Cookie')
  res.header('x-xss-protection', '1; mode=block')
  res.header('x-frame-options', 'DENY')
  res.header('x-content-type-options', 'nosniff')
  next()
})

// if (process.env.ENDPOINT_ENV === 'api_gw') {
//   app.use(envMiddleware)
// }

if (process.env.NODE_ENV !== 'development') {
  app.use(function(req, res, next) {
    // eslint-disable-next-line no-console
    console.log('[info]', 'Request URL: ', req.url)
    next()
  })
}

app.use(async (req, res, next) => {
  await nuxt.ready()
  nuxt.render(req, res, next)
})

module.exports.app = app
