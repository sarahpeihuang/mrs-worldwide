const Itinerary = require('../models/itineraryModel')
const mongoose = require('mongoose')

// GET all itineraries
const getItineraries = async (req, res) => {
    const itineraries = await Itinerary.find({})

    res.status(200).json(itineraries)
}

// GET 1 single itinerary 
const getItinerary = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such momma'})
    }
    const itinerary = await Itinerary.findById(id)

    if(!itinerary){
        return res.status(404).json({error: 'no puss'})
    }

    res.status(200).json(itinerary)
}



// create a new itinerary
const createItinerary = async (req, res) => {
    const {title, days, city, nationality} = req.body

    try{
        const itinerary = await Itinerary.create({title, days, city, nationality})
        res.status(200).json(itinerary)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createItinerary,
    getItinerary,
    getItineraries
}