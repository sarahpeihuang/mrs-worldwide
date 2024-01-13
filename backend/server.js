require('dotenv').config()

const express = require('express')

// express app
const app = express()

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'welcome to mrs worldwide'})
})

// listening for requests
app.listen(process.env.PORT, () => {
    console.log('listening to yo momma', process.env.PORT)
})

