const mongoose = require('mongoose')
const { Schema } = mongoose;

const homeSchema = new Schema({
    largeTitle: String,
    largeText: String,
    subEntry: [{
        smallTitle: String,
        link: String,
        smallText: String
    }]
});

module.exports = mongoose.model('Home', homeSchema)