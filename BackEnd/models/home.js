const mongoose = require('mongoose')
const { Schema } = mongoose;

const homeSchema = new Schema({
    entry: [{
        largeTitle: String,
        largeText: String,
        subEntry: [{
            title: [{
                text: String,
                link: String
            }],
            smallText: String
        }]
    }]
});

module.exports = mongoose.model('Home', homeSchema)