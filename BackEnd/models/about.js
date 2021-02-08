const mongoose = require('mongoose')
const { Schema } = mongoose;

const aboutSchema = new Schema({
    largeTitle: String,
    largeText: String,
    subEntry: [{
        smallTitle: String,
        smallText: String,
        list: [{
            listItem: String
        }]
    }]
});

module.exports = mongoose.model('About', aboutSchema)