import { useState, useEffect } from "react";
import axios from "axios";

const CountrysList = ({ countrys, newFilter }) => {
  const api_key = import.meta.env.VITE_SOME_KEY;
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [time, setNewTime] = useState(null);

  const CountrysToShow = newFilter
    ? countrys.filter((Country) =>
        Country.name.common.toLowerCase().includes(newFilter.toLowerCase())
      )
    : countrys;

  useEffect(() => {
    if (CountrysToShow.length === 1) {
      setSelectedCountry(CountrysToShow[0]);
    }
  }, [CountrysToShow.length]);

  useEffect(() => {
    if (!selectedCountry) {
      setNewTime(null);
      return;
    }
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${selectedCountry.capital[0]}&aqi=no`
      )
      .then((response) => {
        setNewTime(response.data);
      })
      .catch((err) => {
        console.error("Error al cargar el clima:", err);
      });
  }, [selectedCountry]);

  if (CountrysToShow.length >= 10) {
    return "Too many matches, specify another filter";
  }
  if (CountrysToShow.length === 1) {
    return <CountryDetail country={CountrysToShow[0]} time={time} />;
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
      {selectedCountry && (
        <CountryDetail country={selectedCountry} time={time} />
      )}
    </div>
  );
};

const CountryDetail = ({ country, time }) => (
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
    {time ? (
      <div>
        Temperatura: {time.current.temp_c}°C
        <br />
        Condición: {time.current.condition.text}
        <br />
        Viento: {time.current.wind_mph}
        <br />
        <img src={`${time.current.condition.icon}`} alt="" />
      </div>
    ) : (
      <div>Cargando clima…</div>
    )}
  </>
);
export default CountrysList;
