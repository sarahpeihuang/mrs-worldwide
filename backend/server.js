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

// connect to mongodb
mongoose.connect(process.env.MONGO_ID)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to MONGO BOY and listening to yo momma', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



