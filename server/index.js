import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const PROD = process.env.NODE_ENV === 'production'
const MONGO_DB_URI =
	process.env.MONGO_DB_URI || 'mongodb://localhost:27017/react-service-app'

mongoose.connect(MONGO_DB_URI)

const app = express()

if (PROD) {
	app.use('/', express.static(process.cwd() + '/build/'))
	app.use('/static/', express.static(process.cwd() + '/build/static'))
}

app.listen(PORT, () => console.log('App is listening to PORT ', PORT))
