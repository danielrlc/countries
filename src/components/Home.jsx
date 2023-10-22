/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";
import Check from "./icons/Check";
import ChevronUp from "./icons/ChevronUp";
import ChevronDown from "./icons/ChevronDown";
import MagnifyingGlass from "./icons/MagnifyingGlass";

export default function Home({ mode, viewCountry, countriesData }) {
  const [showFilter, setShowFilter] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [region, setRegion] = useState("All");

  const countrySearchBox = useCallback(
    (inputElement) => {
      if (inputElement) {
        inputElement.focus();
      }
    },
    [mode]
  );

  return (
    <>
      {/* Search for a country & Filter by region */}
      {/* outer wrapper */}
      <div className="px-4 pt-8">
        {/* inner wrapper */}
        <div className="max-w-[1284px] mx-auto md:flex md:items-center md:justify-between md:w-full mb-12 lg:mb-8">
          {/* Search for a country */}
          <div className="flex items-center relative mb-12 md:mb-0">
            <input
              ref={countrySearchBox}
              placeholder="Search for a country..."
              className="h-[55px] w-full max-w-[430px] pl-16 rounded-lg py-4 text-darkGray dark:text-white bg-white dark:bg-darkBlue"
              onChange={(event) => setSearchInput(event.target.value)}
              value={searchInput}
            />
            <MagnifyingGlass />
          </div>

          {/* Filter by region */}
          <div className="relative">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="h-[55px] w-64 px-6 bg-white dark:bg-darkBlue rounded-lg text-sm flex items-center justify-between mb-1 hover:bg-gray-200 dark:hover:bg-vvDarkBlue"
            >
              Filter by Region
              {showFilter ? <ChevronUp /> : <ChevronDown />}
            </button>
            {showFilter && (
              <ul className="bg-white dark:bg-darkBlue w-64 px-2 py-4 rounded-lg text-sm leading-6 absolute z-10">
                {["Africa", "Americas", "Asia", "Europe", "Oceania"].map(
                  (regionOption) => {
                    return (
                      <li key={regionOption}>
                        <button
                          onClick={() =>
                            setRegion(
                              region !== regionOption ? regionOption : "All"
                            )
                          }
                          className={`flex px-4 rounded w-full hover:bg-gray-200 hover:dark:bg-vDarkBlue cursor-pointer ${
                            region === regionOption && "font-semibold"
                          }`}
                        >
                          {regionOption}{" "}
                          <span className="pl-2">
                            {region === regionOption && <Check />}
                          </span>
                        </button>
                      </li>
                    );
                  }
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Countries and flags */}
      <main className="px-4 pb-32">
        <ul className="grid gap-x-[72px] gap-y-[36px] lg:gap-y-[72px] grid-cols-[repeat(auto-fill,_267px)] justify-center max-w-[1284px] mx-auto">
          {countriesData
            .filter((country) =>
              country.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .filter((country) => country.region === region || region === "All")
            .map((country) => (
              <li key={country.alpha2Code}>
                <button
                  className="transition duration-200 hover:scale-105 bg-white dark:bg-darkBlue w-[267px] h-[336px] rounded shadow shadow-gray-200 dark:shadow-none"
                  onClick={() => viewCountry(country)}
                >
                  {/* Flag */}
                  <img
                    className="w-full h-[162px] rounded-t"
                    src={country.flags.png}
                    alt={`${country.name} flag`}
                  />

                  {/* Country details */}
                  <div className="p-6 h-[174px]">
                    <div className="text-lg font-extrabold mb-3 leading-5">
                      {country.name}
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
                      {country.capital && (
                        <div>
                          <span className="font-semibold">Capital:</span>{" "}
                          {country.capital}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
