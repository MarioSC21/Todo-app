import express from 'express'
import cors from 'cors'
import config from './config'
import todoRoute from './routes/todo.route'

const app = express()

// ? Middleware
app.use(cors())
app.use(express.json())

// ? Puerto
app.set('port', config.port)

// ? Ruta principal
app.get('/', (_, res) => {
  res.status(200).json({
    status: true,
    message: 'Todo app Api',
    repository: 'https://github.com/MarioSC21/manga.In-Scrapper',
    endPoints: {
      todo: '/todo'
    }
  })
})

// ? Rutas
app.use(todoRoute)

export default app
