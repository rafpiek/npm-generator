import { Router } from 'express'
import {
  ApplicationController
} from 'controllers'

const router = Router()

router.get('/', ApplicationController.root)

export default router