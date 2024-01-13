require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const itineraryRoutes = require('./routes/itinerary')

// express app
const app = express()

// middleware
app.use(express.json())



// routes 
app.use('/api/itinerary', itineraryRoutes)
// 

// listening for requests
app.listen(process.env.PORT, () => {
    console.log('listening to yo momma', process.env.PORT)
})

