import { CohereClient } from "cohere-ai"
import SafeCities from "../models/safeCitiesModel.js"
import Safe from "../../frontend/src/components/safe_cities.js"

// POST a new prompt
const cohere = new CohereClient({
    token: "sUfIRTQomXZFFdwNCggfI2Xy01qvmaw8QpTlQJf2", // This is your trial API key
  })
  
  const createSafeCities = async (req, res) => {
      const { city1, city2, city3 } = req.body
  
      try{
          const prompt = `Travelling to ${city}, create an itinerary for ${days} days. Separate each activity into its separate paragraph. put two new lines after each day is stated.\n`
  
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
  
      const generatedText = response.generations[0].text
  
      const safeCities = { city1, city2, city3 };
      await SafeCities.create(safeCities)
      res.status(200).json(safeCities)
  } catch (error){
      console.error(error)
      res.status(500).json({error: 'internal server ewwow'})
  }
  }
  
  export default createSafeCities 