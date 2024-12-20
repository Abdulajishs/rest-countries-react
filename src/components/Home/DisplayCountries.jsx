import React from "react";
import SingleCountry from "./SingleCountry";

const DisplayCountries = ({
  countries,
  filteredCountries,
  search,
  darkMode,
}) => {
  return (
    <div
      className={`
    ${
      filteredCountries.length === 0 && search
        ? "flex flex-row justify-center items-center"
        : "grid grid-cols-1 gap-10 mx-24 md:my-10 md:mx-16 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    }`}
    >
      {filteredCountries.length === 0 && search ? (
        <p
          className={`${
            darkMode ? "bg-gray-950 text-white " : "bg-transparent "
          } text-2xl font-bold my-32 md:my-48 text-center`}
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
