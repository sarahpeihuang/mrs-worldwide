import React from "react";
import Expedia from "../images/expedia.png";
import Airbnb from "../images/airbnb.png";

const Housing = ({ city }) => {
  const expediaUrl = `https://www.expedia.ca/Hotel-Search?adults=1&children=&destination=${city}`;
  const airbnbUrl = `https://www.airbnb.ca/s/${city}/homes?&adults=1`;

  return (
    <header>
      <div className="housing p-5 rounded-lg bg-white shadow-lg">
        <h2 className="text-[#e933a3] font-bold text-2xl mb-4">
          Housing in {city}
        </h2>
        <a
          href={expediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-4"
        >
          <img
            src={Expedia}
            alt="Expedia"
            className="rounded-xl w-24 h-24 p-2"
          />
          <p className="ml-4 text-lg">{city} Hotel Options on Expedia</p>
        </a>

        <a
          href={airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img src={Airbnb} alt="Airbnb" className="rounded-xl w-24 h-24 p-2" />
          <p className="ml-4 text-lg">{city} Hotel Options on Airbnb</p>
        </a>
      </div>
    </header>
  );
};

export default Housing;
