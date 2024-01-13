const express = require('express')
const {
    createItinerary,
    getItineraries,
    getItinerary
} = require('../controllers/itineraryController')

//const { getCohereResponse } = require('../controllers/CohereController')

const router = express.Router()

// GET ALL itineraries
router.get('/', getItineraries)

// GET 1 itinerary
router.get('/:id', getItinerary)

// POST a new itinerary, allows users to submit their input 
router.post('/', createItinerary)

// COHERE API
//router.post('/', getCohereResponse)


module.exports = router