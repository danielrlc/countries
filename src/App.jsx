import { useState } from "react";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

export default function App() {
  const [view, setView] = useState("Home");
  const [country, setCountry] = useState("");

  function viewCountry(country) {
    setCountry(country)
    setView("CountryDetails");
  }

  return view === "Home" ? (
    <Home viewCountry={viewCountry} />
  ) : (
    <CountryDetails setView={setView} country={country} />
  );
}
