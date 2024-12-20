import React from "react";
import SingleCountry from "./SingleCountry";

const DisplayCountries = ({
  countries,
  filteredCountries,
  search,
  darkMode,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {filteredCountries.length === 0 && search ? (
        <p
          className={`${
            darkMode ? "bg-gray-950 text-white " : "bg-transparent "
          } text-2xl font-bold my-32 md:my-48`}
        >
          OOPS!
        </p>
      ) : filteredCountries.length === 0 ? (
        countries.map((country, index) => (
          <SingleCountry key={index} country={country} darkMode={darkMode} />
        ))
      ) : (
        filteredCountries.map((country, index) => (
          <SingleCountry key={index} country={country} darkMode={darkMode} />
        ))
      )}
    </div>
  );
};

export default DisplayCountries;
