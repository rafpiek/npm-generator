import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import listEndpoints from 'express-list-endpoints'
import routes from './routes'
import models from './models'
import { connectDb } from 'utils/database'
import { Authorization, ErrorHandler } from 'services'
import { Constants } from 'utils'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(ErrorHandler.logger)
app.use(ErrorHandler.handler)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(Authorization.getUserIdMiddleware)

app.use(async (req, res, next) => {
  if(!['/'].includes(req.path)) {
    req.currentUser = await models.User.findOne({ id: req.userId })
    req.models = models
  }
  next()
})

app.use('/users', routes.user)
app.use('/about', routes.about)
app.use('/', routes.auth)

app.get('/', (req, res) => {
  res.send({ message: 'Hello from Becompleat User Service', today: new Date() })
})

if (process.env.ENVIRONMENT === Constants.environments.development) {
  app.get('/routes', (req, res) => {
    const routes = listEndpoints(app)
    res.send({ routes })
  })
}

const port = process.env.PORT
const eraseDatabaseOnSync = process.env.FLUSH_DB_ON_START === 'true'

connectDb()
  .then( async () => {
    if (eraseDatabaseOnSync) {
      await Promise.all([
        models.User.deleteMany({})
      ])
      console.log('DB reinitialized')
      console.log(`Users count: ${await models.User.count()}`)
    }

    app.listen(port, () => {
      console.log(`Becompleat User Service listening on port ${port}`)
    })
  })

