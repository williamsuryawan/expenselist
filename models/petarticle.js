const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema ({
    date: {
        type: Date
    },
    name: {
        type: String
    },
    link: {
        type: String
    },
    description: {
        type: String
    }
})

let Article = mongoose.model('Article', articleSchema)

module.exports = Article