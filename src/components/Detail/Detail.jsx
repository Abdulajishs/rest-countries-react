import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Borders from "./Borders";

const Detail = ({ darkMode, borderAbbr }) => {
  let [currency, setCurrency] = useState("");
  let [languages, setLanguages] = useState("");
  let [border, setBorder] = useState([]);

  let location = useLocation();
  let country = location.state || {};

  let navigate = useNavigate();

  // console.log(country, borderAbbr);

  useEffect(() => {
    setCurrency(() => {
      let currencyKey = Object.keys(country.currencies)[0];
      return country.currencies[currencyKey].name;
    });
    setLanguages(() => {
      let lang = Object.values(country.languages).sort().join(",");
      return lang;
    });
    setBorder(() => {
      let arr = country.borders;
      // console.log(arr);
      if (!arr) {
        return [];
      }
      // console.log(arr);
      let bor = [];
      arr.forEach((ele) => {
        borderAbbr.forEach((obj) => {
          let key = Object.keys(obj)[0];
          // console.log(ele, key);
          if (ele === key) {
            // console.log(obj);
            bor.push(obj[key]);
          }
        });
      });
      console.log(bor);
      return bor;
    });
  }, [country]);

  let backToHomeHandler = () => {
    navigate("/");
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-950 text-white " : "bg-gray-100 "
      } p-3 lg:p-16 `}
    >
      <button
        className={`${
          darkMode ? "bg-gray-900 text-white " : "bg-white  "
        }flex flex-row justify-between items-center gap-5 px-10 py-5   shadow-xl rounded-md text-2xl `}
        onClick={backToHomeHandler}
      >
        <FaArrowLeft /> Back
      </button>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-20 lg:gap-32  ">
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="h-72 w-full mt-20 mb-10 md:w-[35%] lg:w-[40%] md:h-96 "
        />
        <div className="md:w-[50%]">
          <div className="md:w-full md:flex md:flex-row md:justify-between md:items-center ">
            <div>
              <h1 className="text-4xl font-extrabold mb-4 md:text-2xl">
                {country.name.common}
              </h1>
              <p className="text-2xl font-light md:text-xl">
                <span className=" font-semibold">Native Name: </span>
                {
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ].common
                }
              </p>
              <p className="text-2xl font-light md:text-xl">
                <span className="font-semibold">Population: </span>{" "}
                {country.population}{" "}
              </p>
              <p className="text-2xl font-light md:text-xl">
                <span className="font-semibold">Region: </span> {country.region}{" "}
              </p>
              <p className="text-2xl font-light md:text-xl">
                <span className="font-semibold">Sub Region: </span>{" "}
                {country.subregion}{" "}
              </p>
              <p className="text-2xl font-light mb-8 md:text-xl">
                <span className="font-semibold">Capital: </span>{" "}
                {country.capital?.[0] || "N/A"}{" "}
              </p>
            </div>

            <div>
              <p className="text-2xl font-light md:text-xl">
                <span className="font-semibold">Top Level Domain: </span>{" "}
                {country.tld[0]}{" "}
              </p>
              <p className="text-2xl font-light md:text-xl">
                <span className="font-semibold">Currencies: </span> {currency}{" "}
              </p>
              <p className="text-2xl font-light mb-8 md:text-xl">
                <span className="font-semibold">Languages: </span> {languages}{" "}
              </p>
            </div>
          </div>
          <Borders borders={border} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
