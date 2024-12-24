import React, { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import ThemeContext from "../../store/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white"
      } flex flex-row justify-between gap-10 px-8 md:px-16 py-16  md:py-6 shadow-lg w-full`}
    >
      <h1 className="text-3xl font-extrabold">Where in the world?</h1>
      <div
        className="flex flex-row gap-3 justify-center items-center "
        onClick={() => setDarkMode((prev) => !prev)}
      >
        <FaMoon
          className={`h-6 w-6 ${darkMode ? "text-white" : "text-black"}`}
        />
        <p className="text-2xl font-medium flex items-end w-auto">Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
