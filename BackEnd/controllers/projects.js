const projectRouter = require('express').Router()
const Projects = require('../models/projects')

projectRouter.get('/', async (request, response) => {
    response.json("projects")
})

function MapSubEntry(body) {
    return body.subEntry ? body.subEntry.map(a => ({
        smallTitle: a.smallTitle,
        smallText: a.smallText,
        link: a.link,
        Gallery: a.list ? a.list.map(b => ({ 
            galleryItem: b.galleryItem,
            galleryText: b.galleryText
        })) : null
    })) : null
}
projectRouter.post('/', async (request, response, next) => {
    const body = request.body
    const project = new projects({
        largeTitle: body.largeTitle,
        largeText: body.largeText,
        subEntry: MapSubEntry(body)
    })
    try {
        const savedProject = await project.save()
        response.json(savedProject.toJSON())
    } catch (exception) {
        next(exception)
    }
})

module.exports = projectRouter