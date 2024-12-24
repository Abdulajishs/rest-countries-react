import React from "react";
import Home from "../components/Home/Home";

const HomePage = ({ country, loading }) => {
  return (
    <div>
      <Home countries={country} loading={loading} />
    </div>
  );
};

export default HomePage;
