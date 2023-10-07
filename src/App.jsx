import countriesData from "../data/countries.json";

function App() {
  const countries = countriesData;

  return (
    <div className="bg-gray-100">
      <header className="flex justify-center bg-white shadow-md shadow-gray-200 relative">
        <div className="w-full lg:max-w-[1210px] px-4 cols4:px-0 flex items-center justify-between h-20">
          <h1 className="font-extrabold text-2xl">Where in the world?</h1>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[18px] h-[18px] mr-2 relative top-[3px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            <div className="font-semibold">Dark Mode</div>
          </div>
        </div>
      </header>

      <div className="flex justify-center my-12">
        <div className="w-full max-w-[1210px] flex items-center relative">
          <input
            placeholder="Search for a country..."
            className="h-[55px] w-[430px] pl-16 rounded-lg py-4"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 absolute ml-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      <main className="bg-gray-100 p-16">
        <ul className="grid gap-[70px] grid-cols-[repeat(auto-fill,_250px)] justify-center">
          {countries.map((country) => (
            <li
              key={country.cca2}
              className="bg-white w-[250px] rounded z-10 shadow shadow-gray-300"
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
