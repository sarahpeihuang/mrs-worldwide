import React, { useState } from 'react';

const Searchbars = ({ onSubmit }) => {
  // Initialize state for the input fields
  const [title, setTitle] = useState('');
  const [days, setDays] = useState('');
  const [city, setCity] = useState('');
  const [nationality, setNationality] = useState('')

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input values here if needed

    // Create an itinerary object with the input values
    const itinerary = { title, days, city, nationality };

    // Call the onSubmit function passed from the parent component
    onSubmit(itinerary);

    // Clear the input fields
    setTitle('');
    setDays('');
    setCity('');
    setNationality('')
  };

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
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Searchbars;
