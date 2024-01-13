// CohereController.js
const axios = require('axios');

async function getCohereResponse() {
  const options = {
    method: 'POST',
    url: 'https://api.cohere.ai/v1/generate',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    data: {
      truncate: 'END',
      return_likelihoods: 'NONE',
      prompt: 'Please explain to me how LLMs work'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while making the API call.');
  }
}

module.exports = { getCohereResponse };
