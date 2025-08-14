import { useState, useEffect } from "react";
import axios from "axios";
import CountryFilter from "./Filter";
import CountrysList from "./Countrys";

const App = () => {
  const [Countrys, setNewCountry] = useState(null);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setNewCountry(response.data);
      });
  }, []);

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  if (!Countrys) {
    return null;
  }

  return (
    <>
      <div>
        find countries{" "}
        <CountryFilter newfilter={newFilter} onChange={handleFilterChange} />
      </div>
      <div>
        <CountrysList countrys={Countrys} newFilter={newFilter} />
      </div>
    </>
  );
};

export default App;
