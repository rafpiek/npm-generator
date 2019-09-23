export default class MessagesController {
  static async list(req, res, next) {
    req.models.Message.deleteMany({}, f=>f)
    const messages = await req.models.Message.find()
    res.json(messages)
    next()
  }

  static find(req, res) {

  }

  static async create(req, res) {
    const { message } = req.body
    const createdMessage = await req.models.Message.create({ ...message })

    const json = {
      message: createdMessage,
      info: 'Message creates'
    }
    res.json(json)
  }

}