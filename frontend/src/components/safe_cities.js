import React, { useState, useEffect } from 'react';
// import safeCity from '../cohere/dataset.js'; // Replace with the actual path

const Safe = () => {
    const [saferCities, setSaferCities] = useState([]);

    // Assuming 'Toronto' and 'Canada' are the default values
    const city = 'Toronto';
    const country = 'Canada';

    // useEffect(() => {
    //     // Call the safeCity function when the component mounts
    //     const result = safeCity(city, country);
    //     setSaferCities(result);
    // }, [city, country]);

    return (
        <header className="p-5">
            <div className="safe">
                <h2 className="text-[#e933a3] font-bold">Safe Cities you can consider</h2>
                <ul>
                    {/* {saferCities.map(cityInfo => (
                        <li key={cityInfo[0]}>
                            {`${cityInfo[0]} - Crime Index: ${cityInfo[1]}, Safety Index: ${cityInfo[2]}`}
                        </li>
                    ))} */}
                </ul>
            </div>
        </header>
    );
};

export default Safe;
