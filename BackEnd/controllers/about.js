const aboutRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const About = require('../models/about')

aboutRouter.get('/', async (request, response) => {
    const blogs = await About.find({})
    response.json(blogs.map(u => u.toJSON()))
})

function MapSubEntry(body) {
    return body.subEntry ? body.subEntry.map(a => ({
        smallTitle: a.smallTitle,
        smallText: a.smallText,
        list: a.list ? a.list.map(b => ({ 
            listItem: b.listItem 
        })) : null
    })) : null
}
aboutRouter.post('/', async (request, response, next) => {
    const body = request.body
    const about = new About({
        largeTitle: body.largeTitle,
        largeText: body.largeText,
        subEntry: MapSubEntry(body)
    })
    try {
        const savedAbout = await about.save()
        response.json(savedAbout.toJSON())
    } catch (exception) {
        next(exception)
    }
})

module.exports = aboutRouter