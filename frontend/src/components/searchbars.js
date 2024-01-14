import React, { useState } from 'react'
import { useItinerariesContext } from '../hooks/useItineraryContext'

const Searchbars = () => {
  const { dispatch } = useItinerariesContext()

  const [title, setTitle] = useState('');
  const [days, setDays] = useState('');
  const [city, setCity] = useState('');
  const [nationality, setNationality] = useState('')
  const [error, setError] = useState(null)

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const itinerary = { title, days, city, nationality };

    const response = await fetch('/api/itinerary', {
        method: 'POST',
        body: JSON.stringify(itinerary),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const json = await response.json()

    if (!response.ok) {
        setError(json.error)
    }
    if(response.ok){
        setTitle('');
        setDays('');
        setCity('');
        setNationality('')
        setError(null)
        console.log('new itinerary added', json)
        dispatch({type: 'CREATE_ITINERARY', payload: json})
    }
}

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-container">
        <h1 class='bg-gradient-to-r from-[#fd389bff] via-[#66ddeeff]  to-[#ffce1aff] text-4xl p-6 hover:text-[#ffffff]'><strong>WELCOME TO MRS WORLDWIDE</strong></h1>
        <h1><strong></strong></h1>

        <div>
        <label htmlFor="title" class="font-bold py-2">Trip Title:</label>
        <input
        class="rounded-xl "
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="days" class="font-bold">Number of Days:</label>
        <input
          type="number"
          id="days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
          class="rounded-xl"
        />
      </div>
      <div>
        <label htmlFor="city" class="font-bold">City of Travel:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          class="rounded-xl"
        />
      </div>
      <div>
        <label htmlFor="nationality" class="font-bold">Nationality:</label>
        <input
          type="text"
          id="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
          class="rounded-xl"
        />
      </div>
      <button class="rounded-md fill-pink-500">Submit</button>
      {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default Searchbars;
