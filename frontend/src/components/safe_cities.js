import React, { useState, useEffect } from 'react';
// import safeCity from '../cohere/dataset.js'; // Replace with the actual path

const Safe = () => {
    const [saferCities, setSaferCities] = useState([]);

    const city = 'Toronto';
    const country = 'Canada';

    return (
        <header className="p-5">
            <div className="safe">
                <h1 className="text-[#e933a3] font-bold text-2xl mb-4">Safety Advice for Paris</h1>
                <p>1. Research the safest neighborhoods in Paris and stay in those areas. Consider choosing a hotel or Airbnb that is in a well-lit and busy part of the city, preferably close to a metro station so you can easily get around.</p>
                <br></br>
                <p>2. Learn some basic French phrases to help you navigate and communicate with locals. Knowing how to communicate basic information can make you less of a target for tourists.</p>
                <br></br>
                <p>3. Make an emergency plan. Share your travel plans with trusted family or friends at home, carry a copy of your passport at all times, and have the contact information for the local embassy or consulate easily accessible.</p>
            </div>
        </header>
    );
};

export default Safe;
