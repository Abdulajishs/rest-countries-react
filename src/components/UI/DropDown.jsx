import { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import ThemeContext from "../../store/ThemeContext";

const Dropdown = ({
  label,
  options = [],
  selectedValue,
  onChange,
  placeholder = "Select an option",
}) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="relative ml-8 my-8 md:ml-0 md:my-5">
      <label className="sr-only">{label}</label>
      <select
        className={`${
          darkMode ? "bg-gray-900 text-white " : "bg-white "
        } text-2xl p-6 shadow-md rounded-md h-24 w-[70%] md:w-full appearance-none md:h-16 md:text-xl md:p-2 md:px-10`}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
      <FaChevronDown className="absolute left-[65%] md:left-[90%] top-1/2 transform -translate-y-1/2 pointer-events-none" />
    </div>
  );
};

export default Dropdown;
