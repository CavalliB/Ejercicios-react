import { useState, useEffect } from "react";
import axios from "axios";
import PersonsFilter from "./Filter";
import PersonsList from "./Persons";
import PersonForm from "./PersonForm";
import personService from "./services/db";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [stateNotify, SetStateNotify] = useState('good');

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      const person = persons.find((p) => p.name === newName);
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...person, number: newNumber };
        personService
          .update(person.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id !== person.id ? p : returnedPerson))
            );
            setNewNumber("");
          })
          .catch((error) => {
            setErrorMessage(`Information of '${person.name}' has already been removed from server`);
            SetStateNotify('bad')
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
        setPersons(persons.filter((p) => p.id !== person.id));
      }
      setErrorMessage(`modded '${person.name}'`);
      SetStateNotify('good')
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return;
    }
    setErrorMessage(`added '${newName}'`);
    SetStateNotify('good')
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName(""), setNewNumber("");
    });
  };

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
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
      <Notification message={errorMessage} stateNotify={stateNotify} />
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
      <PersonsList
        persons={persons}
        filter={newFilter}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
