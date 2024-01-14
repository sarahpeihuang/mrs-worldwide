import express from 'express'
import {
    createItinerary,
    getItineraries,
    getItinerary
  } from '../controllers/itineraryController.js';  

const router = express.Router()

// GET ALL itineraries
router.get('/', getItineraries)

// GET 1 itinerary
router.get('/:id', getItinerary)

// POST a new itinerary, allows users to submit their input 
router.post('/', createItinerary)

export default router