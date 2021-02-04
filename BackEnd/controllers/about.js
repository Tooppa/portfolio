const aboutRouter = require('express').Router()

aboutRouter.get('/', async (request, response) => {
    response.json("about")
})

module.exports = aboutRouter