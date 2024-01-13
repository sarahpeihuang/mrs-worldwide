import React from "react";
import Expedia from "../images/expedia.png";
import Airbnb from "../images/airbnb.png";

const Housing = () => {
  const city = "Toronto"; // INPUT CITY NAME FROM VARIABLE
  const expediaUrl = `https://www.expedia.ca/Hotel-Search?adults=1&children=&destination=${city}`;
  const airbnbUrl = `https://www.airbnb.ca/s/${city}/homes?&adults=1`;
  return (
    <header>
      <div className="housing">
        <h2 className="text-yellow-500">Housing in {city}</h2>
        <a
          href={expediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src={Expedia}
            alt="Expedia"
            className="rounded-xl w-20 h-20 p-2"
          />
          <p className="ml-2">{city} Hotel Options on Expedia</p>
        </a>

        <a
          href={airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img src={Airbnb} alt="Airbnb" class="rounded-xl w-20 h-20 p-2" />
          <p className="ml-2">{city} Hotel Options on Airbnb</p>
        </a>
      </div>
    </header>
  );
};

export default Housing;
