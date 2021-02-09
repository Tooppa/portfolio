const mongoose = require('mongoose')
const { Schema } = mongoose;

const projectSchema = new Schema({
    largeTitle: String,
    largeText: String,
    subEntry: [{
        smallTitle: String,
        smallText: String,
        link: String,
        gallery: [{
            galleryItem: String,
            galleryText: String
        }]
    }]
});

module.exports = mongoose.model('Projects', projectSchema)