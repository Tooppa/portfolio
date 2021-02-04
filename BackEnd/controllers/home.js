const homeRouter = require('express').Router()

homeRouter.get('/', async (request, response) => {
    response.json("home")
})

module.exports = homeRouter