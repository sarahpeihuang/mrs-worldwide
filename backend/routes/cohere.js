import express from 'express'
import createCohereResponse from '../controllers/CohereController.js'
// import createSafeCities from '../controllers/CohereSafeCities.js'

const router = express.Router()

// COHERE API
router.post('/', createCohereResponse)

// COHERE API for safe cities to consider
// router.post('/', createSafeCities)

export default router