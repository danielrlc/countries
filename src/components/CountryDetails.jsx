/* eslint-disable react/prop-types */
import Header from "./Header";
import ArrowLeft from "./icons/ArrowLeft";

export default function CountryDetails({
  countriesData,
  country,
  setView,
  viewCountry,
}) {
  // borders is an array of countries' alpha3Codes
  //
  const borderCountries = country.borders.map((borderCountryAlpha3Code) => {
    const borderCountry = countriesData.find(
      (country) => country.alpha3Code === borderCountryAlpha3Code
    );
    return borderCountry;
  });

  return (
    <>
      <div className="px-4 pt-8">
        <button
          onClick={() => setView("Home")}
          className="flex items-center mb-12 bg-white dark:bg-darkBlue shadow-md shadow-gray-400 dark:shadow-none px-6 py-1"
        >
          <ArrowLeft /> <span className="ml-3">Back</span>
        </button>
      </div>

      <img
        className="w-[340px] h-[240px] mx-auto mt-16 mb-4"
        src={country.flags.png}
        alt={`${country.name} flag`}
      />
      <div className="p-6">
        <div className="text-lg font-extrabold mb-6">{country.name}</div>
        <div className="text-sm leading-8 mb-8">
          <div>
            <span className="font-semibold">Native Name:</span>{" "}
            {country.nativeName}
          </div>
          <div>
            <span className="font-semibold">Population:</span>{" "}
            {country.population}
          </div>
          <div>
            <span className="font-semibold">Region:</span> {country.region}
          </div>
          <div>
            <span className="font-semibold">Subregion:</span>{" "}
            {country.subregion}
          </div>
          <div>
            <span className="font-semibold">Capital:</span> {country.capital}
          </div>
        </div>
        <div className="text-sm leading-8 mb-4">
          <div>
            <span className="font-semibold">Top Level Domain:</span>{" "}
            {country.topLevelDomain}
          </div>
          <div>
            <span className="font-semibold">Currencies:</span>{" "}
            {country.currencies.map((currency, index) => (
              <span key={currency.name}>
                {(index ? ", " : "") + currency.name}
              </span>
            ))}
          </div>
          <div className="mb-8">
            <span className="font-semibold">Languages:</span>{" "}
            {country.languages.map((language, index) => (
              <span key={language.name}>
                {(index ? ", " : "") + language.name}
              </span>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Border Countries:</h2>
            <ul className="-mx-2">
              {borderCountries.map((country) => (
                <button
                  onClick={() => viewCountry(country)}
                  className="px-4 m-2 bg-white dark:bg-darkBlue shadow-md dark:shadow-none "
                  key={country.alpha3Code}
                >
                  {country.name}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
