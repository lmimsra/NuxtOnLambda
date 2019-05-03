'use strict'

const awsServerlessExpress = require('aws-serverless-express')
const express = require('express')
const { Nuxt } = require('nuxt')
const config = require('../nuxt.config')

// const { setHeadersMiddleware } = require('./middleware/header-middleware.js')
// const { loggerMiddleware } = require('./middleware/logger-middleware.js')
// const { envMiddleware } = require('./middleware/env-middleware')

const nuxt = new Nuxt(config)

const app = express()

const buildPath = originUrl => {
  return '/dev' + originUrl
}

/** header middleware */
app.use(function(req, res, next) {
  res.header('no-cache', 'Set-Cookie')
  res.header('x-xss-protection', '1; mode=block')
  res.header('x-frame-options', 'DENY')
  res.header('x-content-type-options', 'nosniff')
  next()
})

if (process.env.ENDPOINT_ENV === 'api_gw') {
  app.use(function(req, res, next) {
    const originalUrl = req.url
    const envUrl = buildPath(originalUrl)
    req.url = envUrl
    // eslint-disable-next-line no-console
    console.log(
      '[info]',
      'Overwrite URL',
      `'${originalUrl}'`,
      'to',
      `'${envUrl}'`
    )
    next()
  })
}

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

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/x-icon',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
]

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)

module.exports.render = (event, context, callback) => {
  // eslint-disable-next-line no-console
  console.log('[info]', 'Event', JSON.stringify(event))
  awsServerlessExpress.proxy(server, event, context)
}
