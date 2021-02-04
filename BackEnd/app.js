const express = require('express')
const app = express()
const cors = require('cors')
const aboutRouter = require('./controllers/about')

app.use(cors())
app.use(express.json())

app.use('/api/about', aboutRouter)

module.exports = app