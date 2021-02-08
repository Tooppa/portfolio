const mongoose = require('mongoose')
const { Schema } = mongoose;

const projectSchema = new Schema({
    entry: [{
        largeTitle: String,
        largeText: String,
        subEntry: [{
            smallTitle: String,
            smallText: String,
            link: String,
            gallery: [{
                listItem: String
            }]
        }]
    }]
});

module.exports = mongoose.model('Projects', projectSchema)