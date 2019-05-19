import express from 'express'

const app = express()

app.route('/').get(function(req, res) {
  // eslint-disable-next-line no-console
  console.log('send')
  res.send({ message: 'api success' })
})

export default {
  path: '/api/',
  handler: app
}
