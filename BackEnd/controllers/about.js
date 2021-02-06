const aboutRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const About = require('../models/about')

aboutRouter.get('/', async (request, response) => {
    const blogs = await About.find({})
    response.json(blogs.map(u => u.toJSON()))
})

module.exports = aboutRouter