import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header";

const MainLayout = ({ darkMode, onMode }) => {
  return (
    <div className={`bg-gray-300 px-10 py-5 md:py-10`}>
      <Header darkMode={darkMode} onMode={onMode} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
