/**
 * レスポンスヘッダーを設定するミドルウェア
 * XSS 対策などのヘッダーを記述
 * TODO: 今後使用できるようにする
 */
const setHeadersMiddleware = (req, res, next) => {
  res.header('no-cache', 'Set-Cookie')
  res.header('x-xss-protection', '1; mode=block')
  res.header('x-frame-options', 'DENY')
  res.header('x-content-type-options', 'nosniff')
  next()
}

module.exposets = {
  setHeadersMiddleware
}
