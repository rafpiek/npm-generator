import { Router } from 'express'
const router = Router()
import {
  UsersController
} from 'controllers'

router.get('/', UsersController.list)
router.get('/:userId', UsersController.findById)

export default router
