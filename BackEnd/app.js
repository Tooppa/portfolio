const express = require('express')
const app = express()
const cors = require('cors')
const aboutRouter = require('./controllers/about')
const homeRouter = require('./controllers/home')
const projectsRouter = require('./controllers/projects')

app.use(cors())
app.use(express.json())

app.use('/api/about', aboutRouter)
app.use('/api/projects', projectsRouter)
app.use('/api/home', homeRouter)

module.exports = app