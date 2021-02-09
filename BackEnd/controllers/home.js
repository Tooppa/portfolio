const homeRouter = require('express').Router()
const Home = require('../models/home')

homeRouter.get('/', async (request, response) => {
    response.json("home")
})

function MapSubEntry(body) {
    return body.subEntry ? body.subEntry.map(a => ({
        smallTitle: a.smallTitle,
        smallText: a.smallText,
        link: a.link
    })) : null
}
homeRouter.post('/', async (request, response, next) => {
    const body = request.body
    const home = new Home({
        largeTitle: body.largeTitle,
        largeText: body.largeText,
        subEntry: MapSubEntry(body)
    })
    try {
        const savedHome = await home.save()
        response.json(savedHome.toJSON())
    } catch (exception) {
        next(exception)
    }
})

module.exports = homeRouter