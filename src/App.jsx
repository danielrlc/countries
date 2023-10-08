import { useState } from "react";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

export default function App() {
  const [view, setView] = useState("Home");
  return view === "Home" ? (
    <Home setView={setView} />
  ) : (
    <CountryDetails setView={setView} />
  );
}
