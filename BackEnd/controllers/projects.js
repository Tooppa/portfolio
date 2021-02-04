const projectRouter = require('express').Router()

projectRouter.get('/', async (request, response) => {
    response.json("projects")
})

module.exports = projectRouter