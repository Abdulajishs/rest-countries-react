import React from "react";
import Detail from "../components/Detail/Detail";

const DetailPage = ({ darkMode, borderAbbr }) => {
  return (
    <div>
      <Detail darkMode={darkMode} borderAbbr={borderAbbr} />
    </div>
  );
};

export default DetailPage;
