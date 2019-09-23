import { Router } from 'express'
import { MessagesController } from 'controllers'

const router = Router()

router.get('/messages', MessagesController.list)
router.post('/messages', MessagesController.create)

export default router