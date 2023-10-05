import countriesData from "../data/countries.json";

function App() {
  const countries = countriesData;

  return (
    <main className="bg-gray-100 flex justify-center p-4 lg:p-16">
      <ul className="grid gap-[70px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country) => (
          <li key={country.cca2} className="bg-white w-[250px]">
            <img
              className="w-full h-[150px]"
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
            <div className="p-6">
              <div className="text-lg font-bold">{country.name.common}</div>
              <div>Population: {country.population}</div>
              <div>Region: {country.region}</div>
              <div>Capital: {country.capital}</div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
