import React, { useContext } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import ThemeContext from "../../store/ThemeContext";

const NotFound = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } text-center flex flex-col justify-center items-center h-96`}
    >
      <FaExclamationTriangle className="text-red-400 text-5xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page data not exist</p>
    </section>
  );
};

export default NotFound;
