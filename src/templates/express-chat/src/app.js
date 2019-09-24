import env from '../env'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import socket from 'socket.io'
import http from 'http'
import corsSetting from 'config/corsSettings'
import {
  db,
  baseMiddleware
} from 'config'
import {
  ErrorHandler
} from 'services'
import routes from 'routes'
import { models } from 'mongoose';

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
app.use(morgan('combined'))
app.use(corsSetting)
app.use(baseMiddleware)
app.use(ErrorHandler.logger)
app.use(ErrorHandler.handler)

// ROUTES
app.use('/', routes.root)
app.use('/', routes.messages)



// START
db.connect()
.then(() => {
  const httpServer = http.Server(app)
  const server = httpServer.listen(env.port, () => {
    console.log(`${env.appName} listening on port ${env.port}.`)
  })

  const io = socket(server)

  io.on('connection', (socket) => {
    console.log(`Connected socket on ${socket.id}`)
    socket.on('disconnect', () => {
      console.log(`Disconnected on socket ${socket.id}`)
    })

    socket.on('newMessage', async (message) => {
      const newMessage = await models.Message.create({ ...message.message })
      console.log('cycki', newMessage)
      socket.emit('messageCreated',  newMessage )

    })
  })

})