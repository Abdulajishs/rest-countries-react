import React, { useEffect, useState } from "react";
import FilterCountry from "./FilterCountry";
import Header from "./Header";
import SearchCountry from "./SearchCountry";
import DisplayCountries from "./DisplayCountries";

const Home = ({ countries, regions, darkMode }) => {
  // const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  // console.log(darkMode);

  useEffect(() => {
    let filtered = countries.filter((country) => {
      let matchesSearch = search
        ? country.name.common
            .toLowerCase()
            .includes(search.trim().toLowerCase())
        : true;
      let matchesRegion = selected ? country.region === selected : true;
      return matchesSearch && matchesRegion;
    });

    setFilteredCountries(filtered);
  }, [search, selected, countries]);

  return (
    // <div className={`bg-gray-300 px-10 py-5 md:py-10`}>
    <div>
      {/* <Header darkMode={darkMode} onMode={setDarkMode} /> */}
      <div
        className={`${darkMode ? "bg-gray-950 text-white " : "bg-gray-100 "} `}
      >
        <div className={`md:flex md:flex-row md:justify-between md:px-16`}>
          <SearchCountry
            search={search}
            onSearch={setSearch}
            darkMode={darkMode}
          />
          <FilterCountry
            selected={selected}
            onSelect={setSelected}
            regions={regions}
            darkMode={darkMode}
          />
        </div>
        <DisplayCountries
          search={search}
          countries={countries}
          filteredCountries={filteredCountries}
          darkMode={darkMode}
        />
      </div>
    </div>
    // </div>
  );
};

export default Home;
