import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  const [country, setCountry] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
          throw new Error(`Error fetching data from from ${res.url}`);
        }
        let data = await res.json();
        let allRegions = data.map((country) => country.region);
        let unique = [...new Set(allRegions)].filter((region) => region);
        // console.log(unique);
        setRegions(unique);
        setCountry(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCountries();
  }, []);

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<HomePage country={country} regions={regions} />}
      />
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
