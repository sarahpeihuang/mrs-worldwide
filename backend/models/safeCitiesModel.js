import mongoose from 'mongoose'
const Schema = mongoose.Schema

const safeCitiesSchema = new Schema({
    city1: {
        type: String,
        required: true
    },
    city2: {
        type: String,
        required: true
    },
    city3: {
        type: String,
        required: true
    },
})

export default mongoose.model('SafeCities', safeCitiesSchema)