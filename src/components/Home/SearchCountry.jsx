import React, { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";

const SearchCountry = ({ search, onSearch }) => {
  const { darkMode } = useContext(ThemeContext);

  const searchHandler = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="pt-5 relative mx-8 md:mx-0 ">
      <img
        src="/assets/images/search.png"
        alt="search icon"
        className="absolute  left-10 top-1/2 transform -translate-y-1/4 pointer-events-none md:h-5 md:top-[45%] "
      />
      <input
        type="text"
        value={search}
        onChange={searchHandler}
        placeholder="Search for a country..."
        className={`text-2xl ${
          darkMode ? "bg-gray-900 text-white " : "bg-white "
        } placeholder:text-gray-300 p-2 pl-28 shadow-md rounded-md h-24 w-full md:h-16  md:text-xl md:pl-20`}
      />
    </div>
  );
};

export default SearchCountry;
