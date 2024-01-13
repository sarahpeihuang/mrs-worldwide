const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itinerarySchema = new Schema({
    days: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Itinerary', itinerarySchema)