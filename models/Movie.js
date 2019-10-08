const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    m_name: {
        type: String
    },
    m_genre: {
        type: String
    },
    m_release: {
        type: String
    },
    m_score: {
        type: Number
    }
})

module.exports = Movie = mongoose.model('movies', MovieSchema)
