import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  const about = {
    appName: 'Becompleat User Service',
    version: '0.0.1',
    createdBy: 'Borsuque Squad',
    email: 'rafal@borsuquesquad.pl'
  }
  res.send(about)
})



export default router
