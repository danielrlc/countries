import { useState } from "react";
import countriesData from "../data/countries.json";

function App() {
  const [countries, setCountries] = useState(countriesData);
  console.log(countries);

  return (
    <ul>
      {countries.map((country) => (
        <li>{country.name.common}</li>
      ))}
    </ul>
  );
}

export default App;
