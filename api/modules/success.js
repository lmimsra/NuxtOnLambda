// 200を返すレスポンスサンプル
import express from 'express'
const router = express.Router()

// 200なので基本的に成功させる
router.use(function(req, res, next) {
  res.status(200)
  next()
})

router.route('/').all(function(req, res) {
  res.send({
    method: req.method.toString(),
    message: req.method.toString() + ' Request success!'
  })
})

export default { router }
