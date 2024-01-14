import { CohereClient } from "cohere-ai"
import Itinerary from "../models/itineraryModel.js"

// POST a new prompt
const cohere = new CohereClient({
  token: "sUfIRTQomXZFFdwNCggfI2Xy01qvmaw8QpTlQJf2", // This is your trial API key
})

const createCohereResponse = async (req, res) => {
    const { title, city, days, nationality } = req.body

    try{
        const prompt = `Travelling to ${city}, create an itinerary for ${days} days. Give maximum 4 sentences per day.\n`

        // Call the Cohere API to generate the response
        const response = await cohere.generate({
        model: "command",
        prompt,
        maxTokens: 300,
        temperature: 0.9,
        k: 0,
        stopSequences: [],
        returnLikelihoods: "NONE"
    })

    let generatedText = response.generations[0].text

    // use regex to separate content between day x
    generatedText = generatedText.replace(/(Day \d+:)/g, "$1\n");

    // Filter out empty strings from the array
    const itinerary = { title, city, days, nationality, prompt, generatedText };
    await Itinerary.create(itinerary)
    res.status(200).json(itinerary)
} catch (error){
    console.error(error)
    res.status(500).json({error: 'internal server ewwow'})
}
}

export default createCohereResponse 