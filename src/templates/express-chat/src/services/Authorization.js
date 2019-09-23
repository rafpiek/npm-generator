import bcrypt from 'bcrypt'
import models from 'models'
import * as Token from 'utils/token'
import * as Password from 'utils/password'
export default class Authorization {

  constructor({email, name, password, passwordConfirmation}) {
    this.email = email
    this.name = name
    this.password = password
    this.passwordConfirmation = passwordConfirmation
    this.user = null
  }

  passwordConfirmationMatches() {
    return this.password === this.passwordConfirmation
  }

  async emailExists() {
    const user = await models.User.findOne({ email: this.email }, '+passwordHash');
    this.user = user
    return user !== undefined && user !== null
  }

  async registerUser() {
    const user = await models.User.create({
      email: this.email,
      name: this.name,
      passwordHash: await Password.hash(this.password)
    })
    return user
  }

  async loginUser() {
    const valid = await Password.compare(this.password, this.user.passwordHash)
    if (valid) {
      const validUser = this.user.toObject(0)
      delete validUser['passwordHash']
      return {user: validUser, token: await Token.generate(this.user._id)}
    } else {
      return null
    }
  }

  static async getUserIdMiddleware(req, res) {
    const bearer = req.headers.authorization
    let token = null
    if (bearer) {
      token = bearer.split(' ')[1]
    }
    if (!['/signup', '/login', '/'].includes(req.path)) {
      try {
        const { userId } = await Token.verify(token)
        req.userId = userId
        req.next()
      } catch (error) {
        res.status(401).send()
      }

    } else {
      req.next()
    }
  }
}
