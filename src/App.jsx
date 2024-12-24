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
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
          throw new Error(`Error fetching data from from ${res.url}`);
        }
        let data = await res.json();
        setCountry(data);
        setLoading(false);
      } catch (error) {
        setHasError(true);
        console.error(error.message);
      }
    };
    fetchCountries();
  }, []);

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <HomePage country={country} loading={loading} hasError={hasError} />
          }
        />
        <Route
          path="/country/:id"
          element={
            <DetailPage
              country={country}
              loading={loading}
              hasError={hasError}
            />
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
