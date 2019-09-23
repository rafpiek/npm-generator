class UsersController {

  static async list(req, res) {
    const users = await req.models.User.find()
    return res.send(users)
  }

  static async findById(req, res) {
    req.models.User.findById(req.params.userId)
      .then(user => {
        if (user) {
          res.send(user)
        } else {
          res.status(404).send({ message: `User with id ${req.params.userId} not found.`})
        }
      })
      .catch(error => res.send({ error: { message: error }}))
  }

}

export default UsersController
