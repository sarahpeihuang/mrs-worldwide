import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import itineraryRoutes from './routes/itinerary.js';
import cohereRoutes from './routes/cohere.js'

// express app
const app = express()

// middleware
app.use(express.json())

// routes 
app.use('/api/itinerary', itineraryRoutes)
app.use('/api/cohere', cohereRoutes)

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



