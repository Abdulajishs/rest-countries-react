import React from "react";
import Home from "../components/Home/Home";

const HomePage = ({ country, regions, darkMode }) => {
  return (
    <div>
      <Home countries={country} regions={regions} darkMode={darkMode} />
    </div>
  );
};

export default HomePage;
