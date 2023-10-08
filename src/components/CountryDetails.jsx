/* eslint-disable react/prop-types */
import Header from "./Header";
import ArrowLeft from "./icons/ArrowLeft";

export default function CountryDetails({ setView, country }) {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="px-4 py-8">
        <button
          onClick={() => setView("Home")}
          className="flex items-center mb-12 bg-white shadow-lg shadow-gray-400 px-6 py-1"
        >
          <ArrowLeft /> <span className="ml-3">Back</span>
        </button>
      </div>

      <img
        className="w-[340px] h-[240px] mx-auto"
        src={country.flags.png}
        alt={`${country.name} flag`}
      />
      <div className="p-6">
        <div className="text-lg font-extrabold mb-3">{country.name}</div>
        <div className="text-sm leading-6 mb-4">
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
            <span className="font-semibold">Region:</span> {country.subregion}
          </div>
          <div>
            <span className="font-semibold">Capital:</span> {country.capital}
          </div>
        </div>
        <div className="text-sm leading-6 mb-4">
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
          <div>
            <span className="font-semibold">Languages:</span>{" "}
            {country.languages.map((language, index) => (
              <span key={language.name}>
                {(index ? ", " : "") + language.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
