const express = require('express')

const router = express.Router()

// GET ALL itineraries
router.get('/', () => {
    res.json({mssg: 'pussy'})
})

// GET 1 itinerary
router.get('/:id', (req, res) => {
    res.json({mssg: 'get 1 pussy'})
})

// POST a new itinerary, allows users to submit their input 
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new pussy'})
})

// POST to generate an itinerary, returning daily schedule



module.exports = router