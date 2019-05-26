import express from 'express'
const app = express()

app.route('/:status').all(function(req, res) {
  // eslint-disable-next-line no-console
  console.log('send')
  res.send({
    message: 'api success',
    status: parseInt(req.params.status, 10)
  })
})

export default {
  path: '/api/',
  handler: app
}
