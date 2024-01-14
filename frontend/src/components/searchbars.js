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
        <h1><strong>WELCOME TO MRS WORLDWIDE</strong></h1>
        <h1><strong></strong></h1>

        <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="days">Number of Days:</label>
        <input
          type="number"
          id="days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City of Travel:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="nationality">Nationality:</label>
        <input
          type="text"
          id="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        />
      </div>
      <button>Submit</button>
      {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default Searchbars;
