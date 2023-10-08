import { useState } from "react";
import countriesData from "../data/countries.json";
import ChevronUp from "./components/icons/ChevronUp";
import ChevronDown from "./components/icons/ChevronDown";
import MagnifyingGlass from "./components/icons/MagnifyingGlass";
import Moon from "./components/icons/Moon";

function App() {
  const countries = countriesData;
  const [showFilter, setShowFilter] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="bg-gray-100">
      {/* Header: Where in the world? and Dark Mode */}
      <header className="flex justify-center bg-white shadow-md shadow-gray-200 relative px-4">
        <div className="w-full lg:max-w-[1210px] flex items-center justify-between h-20">
          <h1 className="font-extrabold">Where in the world?</h1>
          <div className="flex">
            <Moon />
            <div className="font-semibold text-xs">Dark Mode</div>
          </div>
        </div>
      </header>

      {/* Search for a country & Filter by region */}
      <div className="px-4 py-8">
        <div className="xl:flex xl:items-center xl:justify-between xl:w-full xl:max-w-[1210px] mx-auto">
          <div className="flex items-center relative mb-12">
            <input
              placeholder="Search for a country..."
              className="h-[55px] w-full max-w-[430px] pl-16 rounded-lg py-4"
              onChange={(event) => setSearchInput(event.target.value)}
              value={searchInput}
            />
            <MagnifyingGlass />
          </div>
          <div className="relative">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="h-[55px] w-64 px-6 bg-white rounded-lg text-sm flex items-center justify-between mb-1 hover:bg-gray-200"
            >
              Filter by Region
              {showFilter ? <ChevronUp /> : <ChevronDown />}
            </button>
            {showFilter && (
              <ul className="bg-white w-64 px-2 py-4 rounded-lg text-sm leading-6 absolute z-10">
                <li className="px-4 rounded hover:bg-gray-200 cursor-pointer">
                  Africa
                </li>
                <li className="px-4 rounded hover:bg-gray-200 cursor-pointer">
                  America
                </li>
                <li className="px-4 rounded hover:bg-gray-200 cursor-pointer">
                  Asia
                </li>
                <li className="px-4 rounded hover:bg-gray-200 cursor-pointer">
                  Europe
                </li>
                <li className="px-4 rounded hover:bg-gray-200 cursor-pointer">
                  Oceania
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Countries and flags */}
      <main className="bg-gray-100 px-16">
        <ul className="grid gap-[70px] grid-cols-[repeat(auto-fill,_250px)] justify-center">
          {countries
            .filter((country) =>
              country.name.common
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            )
            .map((country) => (
              <li
                key={country.cca2}
                className="bg-white w-[250px] rounded shadow shadow-gray-300"
              >
                <img
                  className="w-full h-[150px] rounded-t"
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                />
                <div className="p-6">
                  <div className="text-lg font-extrabold mb-3">
                    {country.name.common}
                  </div>
                  <div className="text-sm leading-6 mb-4">
                    <div>
                      <span className="font-semibold">Population:</span>{" "}
                      {country.population}
                    </div>
                    <div>
                      <span className="font-semibold">Region:</span>{" "}
                      {country.region}
                    </div>
                    <div>
                      <span className="font-semibold">Capital:</span>{" "}
                      {country.capital}
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
