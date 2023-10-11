import { useState } from "react";
import countriesData from "../data/countries.json";
import Header from "./components/Header";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

export default function App() {
  const [view, setView] = useState("Home");
  const [country, setCountry] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  function viewCountry(country) {
    setCountry(country);
    setView("CountryDetails");
  }

  return (
    <div className={darkMode && "dark"}>
      <div
        className={
          darkMode
            ? "dark:text-white dark:bg-vDarkBlue"
            : "text-vDarkBlue bg-vlightGray"
        }
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {view === "Home" ? (
          <Home viewCountry={viewCountry} countriesData={countriesData} />
        ) : (
          <CountryDetails
            countriesData={countriesData}
            country={country}
            setView={setView}
            viewCountry={viewCountry}
          />
        )}
      </div>
    </div>
  );
}
