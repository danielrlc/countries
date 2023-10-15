import { useState } from "react";
import countriesData from "../data/countries.json";
import Header from "./components/Header";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

export default function App() {
  const [view, setView] = useState("home");
  const [country, setCountry] = useState("");

  const userModePreference = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const initialMode = localStorage.theme || userModePreference;
  const [mode, setMode] = useState(initialMode);

  function flipMode() {
    const nextMode = mode === "light" ? "dark" : "light";
    if (nextMode === "light") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    setMode(nextMode);
  }

  function viewCountry(country) {
    setCountry(country);
    setView("countrydetails");
  }

  return (
    // Tailwind applies dark:-prefixed classes in children if 'dark' class is set here
    <div className={mode}>
      <div
        className={`min-h-screen ${
          mode
            ? "dark:text-white dark:bg-vDarkBlue"
            : "text-vDarkBlue bg-vLightGray"
        }
        `}
      >
        <Header mode={mode} flipMode={flipMode} setView={setView} />
        {view === "home" && (
          <Home
            mode={mode}
            viewCountry={viewCountry}
            countriesData={countriesData}
          />
        )}
        {view === "countrydetails" && (
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
