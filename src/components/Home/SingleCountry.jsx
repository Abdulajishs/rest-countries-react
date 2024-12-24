import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../store/ThemeContext";

const SingleCountry = ({ country, id }) => {
  const { darkMode } = useContext(ThemeContext);
  let navigate = useNavigate();

  const navigateHandler = () => {
    // console.log(country);
    navigate(`/country/${id}`, { state: country });
  };
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white " : "bg-white "
      } rounded-lg mb-16 `}
      onClick={navigateHandler}
    >
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="h-64 w-full rounded-t-lg "
      />
      <div className="flex flex-col items-start p-10">
        <h1 className="text-4xl font-bold py-5">{country.name.common} </h1>
        <p className="text-2xl py-3">
          <span className="font-semibold">Population:</span>{" "}
          {country.population}
        </p>
        <p className="text-2xl py-3">
          <span className="font-semibold">Region:</span> {country.region}
        </p>
        <p className="text-2xl pt-3 pb-14">
          <span className="font-semibold">Capital: </span>
          {country.capital?.[0] || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default SingleCountry;
