import { useState, useEffect } from "react";
// import axios from "axios";
import countriesData from "../data/countries.json";

function App() {
  const [countries, setCountries] = useState(countriesData);
  console.log(countries);

  // useEffect(() => {

  // Let's not keep calling the API when hot reloading
  //   axios
  //     .get("https://restcountries.com/v3.1/all?fields=name,flags")
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }, []);

  return (
    <ul>
      {countries.map((country) => (
        <li>{country.name.common}</li>
      ))}
    </ul>
  );
}

export default App;
