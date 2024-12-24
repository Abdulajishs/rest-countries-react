// import { useContext } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import ThemeContext from "../../store/ThemeContext";

// const FilterCountry = ({
//   countries,
//   selectedRegion,
//   onSelectRegion,
//   selectedSubRegion,
//   onSelectedSubRegion,
//   sortOption,
//   onSortOption,
// }) => {
//   const { darkMode } = useContext(ThemeContext);

//   // console.log(countries);
//   let regions = Array.from(new Set(countries.map((country) => country.region)));
//   // console.log(regions);

//   const subRegions = selectedRegion
//     ? Array.from(
//         new Set(
//           countries
//             .filter((country) => country.region === selectedRegion)
//             .map((country) => country.subregion)
//             .filter((subregion) => subregion !== undefined)
//         )
//       )
//     : [];
//   // console.log(subRegions);

//   const sorting = [
//     "asc_area",
//     "desc_area",
//     "asc_population",
//     "desc_population",
//   ];

//   const regionChangeHandler = (e) => {
//     onSelectRegion(e.target.value);
//   };

//   const subRegionChangeHandler = (e) => {
//     onSelectedSubRegion(e.target.value);
//   };

//   return (
//     <>
//       <div className="relative ml-8 my-8 md:ml-0 md:my-5">
//         <select
//           className={`${
//             darkMode ? "bg-gray-900 text-white " : "bg-white "
//           } text-2xl  p-6  shadow-md rounded-md h-24 w-[70%] md:w-full appearance-none md:h-16 md:text-xl md:p-2 md:px-10`}
//           value={selectedRegion}
//           onChange={regionChangeHandler}
//         >
//           <option value="">Filter by Region</option>

//           {regions.map((region) => (
//             <option value={region} key={region}>
//               {region}
//             </option>
//           ))}
//         </select>
//         <FaChevronDown className="absolute left-[65%] md:left-[90%] top-1/2 transform -translate-y-1/2  pointer-events-none" />
//       </div>
//       {selectedRegion !== "" && (
//         <div className={`relative ml-8 my-8 md:ml-0 md:my-5 `}>
//           <select
//             className={`${
//               darkMode ? "bg-gray-900 text-white " : "bg-white "
//             } text-2xl  p-6  shadow-md rounded-md h-24 w-[70%] md:w-full appearance-none md:h-16 md:text-xl md:p-2 md:px-10`}
//             value={selectedSubRegion}
//             onChange={subRegionChangeHandler}
//           >
//             <option value="">Filter by Sub-Region</option>

//             {subRegions.map((subRegion, index) => (
//               <option value={subRegion} key={`${subRegion}+${index}`}>
//                 {subRegion}
//               </option>
//             ))}
//           </select>
//           <FaChevronDown className="absolute left-[65%] md:left-[90%] top-1/2 transform -translate-y-1/2  pointer-events-none" />
//         </div>
//       )}

//       <div className="relative ml-8 my-8 md:ml-0 md:my-5">
//         <select
//           className={`${
//             darkMode ? "bg-gray-900 text-white " : "bg-white "
//           } text-2xl  p-6  shadow-md rounded-md h-24 w-[70%] md:w-full appearance-none md:h-16 md:text-xl md:p-2 md:px-10`}
//           value={sortOption}
//           onChange={(e) => onSortOption(e.target.value)}
//         >
//           <option value="">Sort By</option>
//           {sorting.map((value) => (
//             <option value={value} key={value}>
//               {value.toUpperCase()}
//             </option>
//           ))}
//           {/* <option value="asc_area">Area (Asc)</option>
//           <option value="desc_area">Area (Desc)</option>
//           <option value="asc_population">Population (Asc)</option>
//           <option value="desc_population">Population (Desc)</option> */}
//         </select>
//         <FaChevronDown className="absolute left-[65%] md:left-[90%] top-1/2 transform -translate-y-1/2  pointer-events-none" />
//       </div>
//     </>
//   );
// };

// export default FilterCountry;

import Dropdown from "../UI/DropDown";

const FilterCountry = ({
  countries,
  selectedRegion,
  onSelectRegion,
  selectedSubRegion,
  onSelectedSubRegion,
  sortOption,
  onSortOption,
}) => {
  const regions = Array.from(
    new Set(countries.map((country) => country.region))
  );

  const subRegions = selectedRegion
    ? Array.from(
        new Set(
          countries
            .filter((country) => country.region === selectedRegion)
            .map((country) => country.subregion)
            .filter(Boolean) // Remove undefined or null
        )
      )
    : [];

  const sorting = [
    { value: "asc_area", label: "Area (Asc)" },
    { value: "desc_area", label: "Area (Desc)" },
    { value: "asc_population", label: "Population (Asc)" },
    { value: "desc_population", label: "Population (Desc)" },
  ];

  return (
    <>
      <Dropdown
        label="Region Filter"
        options={regions.map((region) => ({ value: region, label: region }))}
        selectedValue={selectedRegion}
        onChange={onSelectRegion}
        placeholder="Filter by Region"
      />

      {selectedRegion && (
        <Dropdown
          label="Subregion Filter"
          options={subRegions.map((subRegion) => ({
            value: subRegion,
            label: subRegion,
          }))}
          selectedValue={selectedSubRegion}
          onChange={onSelectedSubRegion}
          placeholder="Filter by Sub-Region"
        />
      )}

      <Dropdown
        label="Sorting Options"
        options={sorting}
        selectedValue={sortOption}
        onChange={onSortOption}
        placeholder="Sort By"
      />
    </>
  );
};

export default FilterCountry;
