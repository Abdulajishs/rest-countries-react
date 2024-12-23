import React, { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";
import { useNavigate } from "react-router-dom";

const Borders = ({ borders, countries }) => {
  const { darkMode } = useContext(ThemeContext);
  let navigate = useNavigate();

  const borderClickHandler = (borderName) => {
    let selectCountry = countries.find(
      (country) => country.name.common === borderName
    );
    // console.log(selectCountry);
    navigate(`/country/${selectCountry.ccn3}`, { state: selectCountry });
  };

  //   console.log(borders);
  return (
    <>
      {borders.length === 0 ? (
        <h1 className="text-2xl font-semibold mb-8 md:mb-0">
          Border Countries: N/A
        </h1>
      ) : (
        <section className="md:flex md:flex-row  md:items-center md:gap-5">
          <h1 className="text-2xl font-semibold mb-8 md:mb-0">
            Border Countries:
          </h1>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
            {borders.map((border, index) => (
              <button
                className={`${
                  darkMode ? "bg-gray-900 text-white " : "bg-white  "
                } px-8 py-3 rounded-md shadow-md md:px-1 md:py-2 w-full text-center break-words`}
                key={index}
                onClick={() => borderClickHandler(border)}
              >
                {border}
              </button>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Borders;
