const mongoose = require('mongoose')
const Schema = mongoose.Schema

const websiteSchema = new Schema({
    website: {
        type: String,
        require: true
    },
    shortURL:{
        type: String
    }
})

module.exports = mongoose.model('Webpage', websiteSchema)
