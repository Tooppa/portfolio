const aboutRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Blog = require('../models/blogs')

aboutRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
    response.json(blogs.map(u => u.toJSON()))
    //response.json("about")
})

module.exports = aboutRouter