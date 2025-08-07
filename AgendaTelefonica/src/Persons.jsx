const PersonsList = ({ persons, filter }) => {
  const FilterPersons = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;
  return FilterPersons.map((person) => (
    <li key={person.id}>
      {person.name} {person.number}
    </li>
  ));
};
export default PersonsList;
