import axios from 'axios';

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


// Cohere API
const options = {
  method: 'POST',
  url: 'https://api.cohere.ai/v1/generate',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: {
    truncate: 'END',
    return_likelihoods: 'NONE',
    prompt: 'Please explain to me how LLMs work'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });


// create a new itinerary
const createItinerary = async (req, res) => {
    const {title, days, city} = req.body

    try{
        const itinerary = await Itinerary.create({title, days, city})
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