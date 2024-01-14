import express from 'express'
import createCohereResponse from '../controllers/CohereController.js'

const router = express.Router()

// COHERE API
router.post('/', createCohereResponse)

export default router