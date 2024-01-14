import React, { useState } from 'react';
import Searchbars from './searchbars';
import Housing from './housing'; 
import Home from '../pages/home';
import Safe from './safe_cities';
import Passport from './passport';

const ParentComponent = () => {
  const [city, setCity] = useState(''); 

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div>
      <Searchbars onSubmit={handleCityChange} />
      <Housing city={city} />
      <br></br>
      <Safe />
      <br></br>
      <Passport />
    </div>
  );
};

export default ParentComponent;
