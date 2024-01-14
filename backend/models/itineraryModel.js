import mongoose from 'mongoose'
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
    },
    generatedText: {
        type: String,
        required: false
    }
})

export default mongoose.model('Itinerary', itinerarySchema)