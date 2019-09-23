class ErrorHandler {
  static logger(err, req, res, next) {
    console.error(err.stack)
    next(err)
  }

  static handler(err, req, res, next) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    next(err)
  }
}

export default ErrorHandler
