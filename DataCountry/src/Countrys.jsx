import { useState } from "react";

const CountrysList = ({ countrys, newFilter }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const CountrysToShow = newFilter
    ? countrys.filter((Country) =>
        Country.name.common.toLowerCase().includes(newFilter.toLowerCase())
      )
    : countrys;

  if (CountrysToShow.length >= 10) {
    return "Too many matches, specify another filter";
  }
  if (CountrysToShow.length === 1) {
    return <CountryDetail country={CountrysToShow[0]} />;
  }

  return (
    <div>
      <ul>
        {CountrysToShow.map((country) => (
          <li key={country.cca3}>
            {country.name.common}
            <button onClick={() => setSelectedCountry(country)}>Show</button>
          </li>
        ))}
      </ul>
      {selectedCountry && <CountryDetail country={selectedCountry} />}
    </div>
  );
};

const CountryDetail = ({ country }) => (
  <>
    <h1>{country.name.common}</h1>
    <div>
      {"Capital "}
      {country.capital}
    </div>
    <div>
      {"Area "}
      {country.area}
    </div>
    <h2>Languages</h2>
    <ul>
      {Object.values(country.languages).map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>
    <div>
      <img
        src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`}
        alt=""
      />
    </div>
  </>
);
export default CountrysList;
