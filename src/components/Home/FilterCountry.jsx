import { FaChevronDown } from "react-icons/fa";

const FilterCountry = ({ selected, onSelect, regions, darkMode }) => {
  // console.log(regions);
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div className="relative ml-8 my-8 md:ml-0">
      <select
        className={`${
          darkMode ? "bg-gray-900 text-white " : "bg-white "
        } text-2xl  p-6  shadow-md rounded-md h-24 w-[70%] sm:w-[60%] md:[w-40%] lg:[w-20%] appearance-none `}
        value={selected}
        onChange={handleChange}
      >
        {selected === "" && (
          <option value="" hidden>
            Filter by Region
          </option>
        )}

        {regions.map((region, index) => (
          <option value={region} key={index}>
            {region}
          </option>
        ))}
      </select>
      <FaChevronDown className="absolute left-[65%] sm:left-[55%] md:left-[45%]  top-1/2 transform -translate-y-1/2  pointer-events-none" />
    </div>
  );
};

export default FilterCountry;
