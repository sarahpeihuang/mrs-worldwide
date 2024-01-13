require('dotenv').config()

const express = require('express')
const itineraryRoutes = require('./routes/itinerary')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
})

// routes 
app.use('/api/itinerary', itineraryRoutes)

// listening for requests
app.listen(process.env.PORT, () => {
    console.log('listening to yo momma', process.env.PORT)
})

