const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itinerarySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Itinerary', itinerarySchema)