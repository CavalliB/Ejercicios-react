const PersonsList = ({ persons, filter, deletePerson }) => {
  const FilterPersons = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;
  return FilterPersons.map((person) => (
    <li key={person.id}>
      {person.name} {person.number} <button onClick={() =>deletePerson(person.id)}>delete</button>
    </li>
    
  ));
};
export default PersonsList;
