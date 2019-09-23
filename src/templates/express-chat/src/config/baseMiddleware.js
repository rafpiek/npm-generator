import models from 'models'

export default (req, res, next) => {
  req.models = models
  console.log(req.models)
  next()
}