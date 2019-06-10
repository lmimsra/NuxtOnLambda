import express from 'express'
import transResponse from './modules/responseList'
const app = express()

// CORS対策
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

app.route('/').get(function(req, res) {
  res.send({ message: 'Request OK!' })
})

app.route('/links').all(function(req, res) {
  res.send({
    message: '参照先のWikipediaリンクです',
    link:
      'https://ja.wikipedia.org/wiki/HTTP%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89'
  })
})

app.route('/list/:status').all(function(req, res) {
  const status = parseInt(req.params.status, 10)
  const message = transResponse(status)
  res.status(status).send({
    status: status,
    description: 'status mean: ' + message
  })
})

export default {
  path: '/api/',
  handler: app
}
