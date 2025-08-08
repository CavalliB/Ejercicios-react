import { useState, useEffect } from "react";
import axios from "axios";
import PersonsFilter from "./Filter";
import PersonsList from "./Persons";
import PersonForm from "./PersonForm";
import personService from "./services/db";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    personService.getAll()
  .then(initialPersons => {
    setPersons(initialPersons)
  })
    });
  

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    personService.create(personObject).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      setNewName(""), setNewNumber("");
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <div>
        filter shown with:{" "}
        <PersonsFilter newfilter={newFilter} onChange={handleFilterChange} />
      </div>
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PersonsList persons={persons} filter={newFilter} />
    </div>
  );
};

export default App;
