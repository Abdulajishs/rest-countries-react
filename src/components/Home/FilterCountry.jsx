import { FaChevronDown } from "react-icons/fa";

const FilterCountry = ({ selected, onSelect, regions, darkMode }) => {
  // console.log(regions);
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div className="relative ml-8 my-8 md:ml-0 md:my-5">
      <select
        className={`${
          darkMode ? "bg-gray-900 text-white " : "bg-white "
        } text-2xl  p-6  shadow-md rounded-md h-24 w-[70%] md:w-full appearance-none md:h-16 md:text-xl md:p-2 md:px-10`}
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
      <FaChevronDown className="absolute left-[65%] md:left-[90%] top-1/2 transform -translate-y-1/2  pointer-events-none" />
    </div>
  );
};

export default FilterCountry;
