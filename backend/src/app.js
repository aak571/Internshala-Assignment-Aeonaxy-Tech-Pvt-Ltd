import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { user_routes } from './routes/user.routes.js'

const serve = express()

serve.use(bodyParser.json())
serve.use(cors({
    origin: ' http://localhost:3000',
    credentials: true
}))
serve.use(express.json({ limit: '16kb' }))
serve.use(express.urlencoded({ extended: true, limit: '16kb' }))

serve.use('/api/v1/user', user_routes)

export { serve }