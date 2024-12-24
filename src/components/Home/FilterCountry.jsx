import { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import ThemeContext from "../../store/ThemeContext";

const FilterCountry = ({
  countries,
  selectedRegion,
  onSelectRegion,
  selectedSubRegion,
  onSelectedSubRegion,
  sortOption,
  onSortOption,
}) => {
  const { darkMode } = useContext(ThemeContext);

  // console.log(countries);
  let regions = Array.from(new Set(countries.map((country) => country.region)));
  // console.log(regions);

  const subRegions = selectedRegion
    ? Array.from(
        new Set(
          countries
            .filter((country) => country.region === selectedRegion)
            .map((country) => country.subregion)
            .filter((subregion) => subregion !== undefined)
        )
      )
    : [];
  // console.log(subRegions);

  const regionChangeHandler = (e) => {
    onSelectRegion(e.target.value);
  };

  const subRegionChangeHandler = (e) => {
    onSelectedSubRegion(e.target.value);
  };

  return (
    <>
      <div className="relative ml-8 my-8 md:ml-0 md:my-5">
        <select
          className={`${
            darkMode ? "bg-gray-900 text-white " : "bg-white "
          } text-2xl  p-6  shadow-md rounded-md h-24 w-[70%] md:w-full appearance-none md:h-16 md:text-xl md:p-2 md:px-10`}
          value={selectedRegion}
          onChange={regionChangeHandler}
        >
          <option value="">Filter by Region</option>

          {regions.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
        <FaChevronDown className="absolute left-[65%] md:left-[90%] top-1/2 transform -translate-y-1/2  pointer-events-none" />
      </div>
      {selectedRegion !== "" && (
        <div className={`relative ml-8 my-8 md:ml-0 md:my-5 `}>
          <select
            className={`${
              darkMode ? "bg-gray-900 text-white " : "bg-white "
            } text-2xl  p-6  shadow-md rounded-md h-24 w-[70%] md:w-full appearance-none md:h-16 md:text-xl md:p-2 md:px-10`}
            value={selectedSubRegion}
            onChange={subRegionChangeHandler}
          >
            <option value="">Filter by Sub-Region</option>

            {subRegions.map((subRegion, index) => (
              <option value={subRegion} key={`${subRegion}+${index}`}>
                {subRegion}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute left-[65%] md:left-[90%] top-1/2 transform -translate-y-1/2  pointer-events-none" />
        </div>
      )}

      <div className="relative ml-8 my-8 md:ml-0 md:my-5">
        <select
          className={`${
            darkMode ? "bg-gray-900 text-white " : "bg-white "
          } text-2xl  p-6  shadow-md rounded-md h-24 w-[70%] md:w-full appearance-none md:h-16 md:text-xl md:p-2 md:px-10`}
          value={sortOption}
          onChange={(e) => onSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="asc_area">Area (Asc)</option>
          <option value="desc_area">Area (Desc)</option>
          <option value="asc_population">Population (Asc)</option>
          <option value="desc_population">Population (Desc)</option>
        </select>
        <FaChevronDown className="absolute left-[65%] md:left-[90%] top-1/2 transform -translate-y-1/2  pointer-events-none" />
      </div>
    </>
  );
};

export default FilterCountry;
