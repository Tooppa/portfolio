const aboutRouter = require('express').Router()

aboutRouter.get('/', async (request, response) => {
    response.json("test")
})

module.exports = aboutRouter