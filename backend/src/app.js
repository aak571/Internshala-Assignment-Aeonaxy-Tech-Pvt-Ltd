import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { account_routes } from './routes/account.routes.js'
import { profile_routes } from './routes/profile.routes.js'

const serve = express()

serve.use(bodyParser.json())
serve.use(cors({
    origin: ' http://localhost:3000',
    credentials: true
}))
serve.use(express.json({ limit: '16kb' }))
serve.use(express.urlencoded({ extended: true, limit: '16kb' }))

serve.use('/api/v1/account', account_routes)
serve.use('/api/v1/profile', profile_routes)

export { serve }