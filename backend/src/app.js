import express from 'express'
import cors from 'cors'

const serve = express()

serve.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))
serve.use(express.json({ limit: '16kb' }))
serve.use(express.urlencoded({ extended: true, limit: '16kb' }))

export { serve }