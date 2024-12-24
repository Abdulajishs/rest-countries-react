import React, { useContext, useEffect, useState } from "react";
import FilterCountry from "./FilterCountry";
import SearchCountry from "./SearchCountry";
import DisplayCountries from "./DisplayCountries";
import ThemeContext from "../../store/ThemeContext";
import Spinner from "../UI/Spinner";
import NotFound from "../UI/NotFound";

const Home = ({ countries, loading, hasError }) => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubRegion, setSelectedSubRegion] = useState("");
  const { darkMode } = useContext(ThemeContext);
  const [sortOption, setSortOption] = useState("");

  let filtered = countries.filter((country) => {
    let matchesSearch = search
      ? country.name.common.toLowerCase().includes(search.trim().toLowerCase())
      : true;
    let matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    let matchesSubRegion = selectedSubRegion
      ? country.subregion === selectedSubRegion
      : true;
    return matchesSearch && matchesRegion && matchesSubRegion;
  });

  if (sortOption) {
    filtered.sort((a, b) => {
      if (sortOption === "asc_area") {
        return a.area - b.area;
      }
      if (sortOption === "desc_area") {
        return b.area - a.area;
      }
      if (sortOption === "asc_population") {
        return a.population - b.population;
      }
      if (sortOption === "desc_population") {
        return b.population - a.population;
      }
      return 0;
    });
  }

  return (
    <div>
      {hasError ? (
        <NotFound />
      ) : (
        <div
          className={`${
            darkMode ? "bg-gray-950 text-white " : "bg-gray-100 "
          } `}
        >
          <div className={`md:flex md:flex-row md:justify-between md:px-16`}>
            <SearchCountry search={search} onSearch={setSearch} />
            <FilterCountry
              countries={countries}
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
              selectedSubRegion={selectedSubRegion}
              onSelectedSubRegion={setSelectedSubRegion}
              sortOption={sortOption}
              onSortOption={setSortOption}
            />
          </div>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <DisplayCountries search={search} filtered={filtered} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
