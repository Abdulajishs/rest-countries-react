import React, { useContext } from "react";
import SingleCountry from "./SingleCountry";
import ThemeContext from "../../store/ThemeContext";

const DisplayCountries = ({ filtered, search }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`
    ${
      filtered.length === 0 && search
        ? "flex flex-row justify-center items-center"
        : "grid grid-cols-1 gap-10 m-5 sm:mx-24 md:my-10 md:mx-16 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    }`}
    >
      {filtered.length === 0 && search ? (
        <p
          className={`${
            darkMode ? "bg-gray-950 text-white " : "bg-transparent "
          } text-2xl font-bold my-32 md:my-48 text-center`}
        >
          OOPS!
        </p>
      ) : (
        filtered.map((country, index) => (
          <SingleCountry key={index} country={country} id={country.ccn3} />
        ))
      )}
    </div>
  );
};

export default DisplayCountries;
