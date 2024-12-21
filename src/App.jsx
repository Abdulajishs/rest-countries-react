import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const [country, setCountry] = useState([]);
  const [regions, setRegions] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [borderAbbr, setBorderAbbr] = useState([]);

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

        setBorderAbbr(() => {
          let result = data.map((ele) => {
            let name = ele.name.common;
            let abb = ele.cca3;
            // console.log(name, abb, { [abb]: name });
            return { [abb]: name };
          });
          // console.log(result);
          return result;
        });
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
        element={<MainLayout darkMode={darkMode} onMode={setDarkMode} />}
      >
        <Route
          index
          element={
            <HomePage country={country} regions={regions} darkMode={darkMode} />
          }
        />
        <Route
          path="/detail"
          element={<DetailPage darkMode={darkMode} borderAbbr={borderAbbr} />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
