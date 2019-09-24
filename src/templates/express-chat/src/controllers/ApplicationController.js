import env from 'env'

export default class ApplicationController {
  static root(req, res) {
    const data = {
      name: env.appName,
      version: "0.0.1",
      urls: [
        url('messages')
      ]
    }
    res.json(data)
  }
}

const url = (path) => (
  `http://localhost:${env.port}/${path}`
)