import React from "react";
import Detail from "../components/Detail/Detail";

const DetailPage = ({ country, loading, hasError }) => {
  return (
    <div>
      <Detail countries={country} loading={loading} hasError={hasError} />
    </div>
  );
};

export default DetailPage;
