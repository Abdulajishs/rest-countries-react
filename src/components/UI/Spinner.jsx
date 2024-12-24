import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading, color = "blue" }) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
