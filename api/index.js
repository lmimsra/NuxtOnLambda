import express from 'express'
import transResponse from './modules/responseList'
const app = express()

app.route('/:status').all(function(req, res) {
  // eslint-disable-next-line no-console
  console.log('send')
  res.send(transResponse(parseInt(req.params.status, 10)))
})

export default {
  path: '/api/',
  handler: app
}
