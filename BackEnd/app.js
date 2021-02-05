const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const aboutRouter = require('./controllers/about')
const homeRouter = require('./controllers/home')
const projectsRouter = require('./controllers/projects')
const middleware = require('./utils/middleware')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
app.use(cors())
app.use(express.json())
app.use(middleware.tokenExtractor)

app.use('/api/about', aboutRouter)
app.use('/api/projects', projectsRouter)
app.use('/api/home', homeRouter)

module.exports = app