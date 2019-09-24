import { Authorization } from 'services'
import { Router } from 'express'
const router = Router()

router.post('/signup', async (req, res) => {
  const { user } = req.body
  const authService = new Authorization(user)
  let response = {}
  let status = 200
  if (!authService.passwordConfirmationMatches()) {
    response = { message: "Passwords don't match."}
    status = 401
  }
  if (await authService.emailExists()) {
    response = { message: "Email already used."}
    status = 401
  } else {
    const registeredUser = await authService.registerUser()
    response = registeredUser
  }

  res.status(status).send(response)
})

router.post('/login', async (req, res) => {
  const { user } = req.body
  const authService = new Authorization(user)
  let response = {}
  let status = 200
  if (await authService.emailExists()) {
    const loggedUser = await authService.loginUser()
    if (loggedUser) {
      response = loggedUser
    } else {
      response = { message: 'Wrong email or password' }
      status = 401
    }
  } else {
    response = { message: 'User not found' }
    status = 404
  }
  console.log(status, response)
  res.status(status).send(response)
})


export default router
