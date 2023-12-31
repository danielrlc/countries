/* eslint-disable react/prop-types */
import ArrowLeft from "./icons/ArrowLeft";

export default function CountryDetails({
  countriesData,
  country,
  setView,
  viewCountry,
}) {
  const borderCountries = country.borders?.map((borderCountryAlpha3Code) => {
    const borderCountry = countriesData.find(
      (country) => country.alpha3Code === borderCountryAlpha3Code
    );
    return borderCountry;
  });

  return (
    <>
      <div className="max-lg:px-6 pt-8 lg:pt-12 lg:pb-4 max-w-[1284px] lg:mx-auto">
        <button
          onClick={() => setView("home")}
          className="flex items-center mb-12 px-6 py-1 bg-white dark:bg-darkBlue shadow shadow-gray-400 dark:shadow-none"
        >
          <ArrowLeft /> <span className="ml-3">Back</span>
        </button>
      </div>

      <div className="lg:flex max-w-[1284px] lg:mx-auto gap-[120px] max-lg:px-6 max-lg:pb-12">
        <img
          className="w-[340px] lg:w-[562px] lg:h-[406px] shrink-0 max-lg:mt-16 mb-12 lg:mb-4 shadow-md shadow-gray-300 dark:shadow-none"
          src={country.flags.png}
          alt={`${country.name} flag`}
        />
        <div className="lg:flex lg:items-center">
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold mb-6">
              {country.name}
            </div>
            <div className="lg:flex">
              <div className="text-sm leading-8 mb-8 lg:w-[350px]">
                <div>
                  <span className="font-semibold">Native Name:</span>{" "}
                  {country.nativeName}
                </div>
                <div>
                  <span className="font-semibold">Population:</span>{" "}
                  {country.population}
                </div>
                <div>
                  <span className="font-semibold">Region:</span>{" "}
                  {country.region}
                </div>
                <div>
                  <span className="font-semibold">Subregion:</span>{" "}
                  {country.subregion}
                </div>
                <div>
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital}
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
              </div>
            </div>
            {borderCountries && (
              <div className="max-lg:mb-8 lg:flex lg:items-center lg:gap-4">
                <h2 className="text-lg lg:text-sm lg:shrink-0 font-semibold max-lg:mb-2">
                  Border Countries:
                </h2>
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
