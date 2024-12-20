import React from "react";
import Home from "../components/Home/Home";

const HomePage = ({ country, regions }) => {
  return (
    <div>
      <Home countries={country} regions={regions} />
    </div>
  );
};

export default HomePage;
