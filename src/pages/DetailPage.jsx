import React from "react";
import Detail from "../components/Detail/Detail";

const DetailPage = ({ country, loading }) => {
  return (
    <div>
      <Detail countries={country} loading={loading} />
    </div>
  );
};

export default DetailPage;
