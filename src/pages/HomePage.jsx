import React from "react";
import Home from "../components/Home/Home";

const HomePage = ({ country, loading, hasError }) => {
  return (
    <div>
      <Home countries={country} loading={loading} hasError={hasError} />
    </div>
  );
};

export default HomePage;
