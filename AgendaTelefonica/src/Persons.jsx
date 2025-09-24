import {
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const PersonsList = ({ persons, filter, deletePerson }) => {
  const FilterPersons = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  return (
    <List sx={{ width: "100%" }}>
      {FilterPersons.map((person) => (
        <ListItem
          key={person.id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deletePerson(person.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={person.name} secondary={person.number} />
        </ListItem>
      ))}
    </List>
  );
};

export default PersonsList;
