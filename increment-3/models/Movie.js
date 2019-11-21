const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    m_id: {
        type: String
    },
    m_name: {
        type: String
    },
    m_genre: {
        type: [String]
    },
    m_release: {
        type: String
    },
    m_score: {
        type: Number
    },
    m_url: {
        type: String
    },
    m_cover: {
        type: String
    },
    m_cast: {
        type: [String]
    },
    m_positive: {
        type: Number
    },
    m_wpositive: {
        type: Number
    },
    m_spositive: {
        type: Number
    },
    m_negative: {
        type: Number
    },
    m_wnegative: {
        type: Number
    },
    m_snegative: {
        type: Number
    },
    m_neutral: {
        type: Number
    },
})

module.exports = Movie = mongoose.model('movies', MovieSchema)
