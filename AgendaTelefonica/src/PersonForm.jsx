import { TextField, Button, Box } from "@mui/material";

const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <Box
      component="form"
      onSubmit={addPerson}
      display="flex"
      flexDirection="column"
      gap={2}
      width="100%"
    >
      <TextField
        label="Name"
        value={newName}
        onChange={handleNameChange}
        fullWidth
      />
      <TextField
        label="Number"
        value={newNumber}
        onChange={handleNumberChange}
        fullWidth
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </Box>
  );
};

export default PersonForm;
