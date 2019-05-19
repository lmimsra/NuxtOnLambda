/**
 * ログを出力するミドルウェア
 * TODO: 今後使用できるようにする
 */
const loggerMiddleware = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('[info]', 'Request URL: ', req.url)
  next()
}

module.exposets = {
  loggerMiddleware
}
