import React from "react";
import { FaMoon } from "react-icons/fa";

const Header = ({ darkMode, onMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white"
      } flex flex-row justify-between gap-10 px-8 md:px-16 py-16  md:py-6 shadow-lg w-full`}
      onClick={() => onMode((prev) => !prev)}
    >
      <h1 className="text-3xl font-extrabold">Where in the world?</h1>
      <div className="flex flex-row gap-3 justify-center items-center ">
        <FaMoon
          className={`h-6 w-6 ${darkMode ? "text-white" : "text-black"}`}
        />
        <p className="text-2xl font-medium flex items-end w-auto">Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
