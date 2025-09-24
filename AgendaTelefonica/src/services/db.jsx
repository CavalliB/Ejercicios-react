import axios from "axios";
const baseUrl = "http://localhost:3001/api/persons";
const localUrl = "/db.json";

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    // Fallback a db.json
    const response = await axios.get(localUrl);
    // Si db.json tiene formato { persons: [...] }, retorna solo el array
    if (response.data && Array.isArray(response.data.persons)) {
      return response.data.persons;
    }
    // Si no, retorna un array vacío para evitar errores
    return [];
  }
};

const create = async (newObject) => {
  try {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
  } catch (error) {
    // Fallback: no se puede crear en db.json, solo retorna el objeto
    return newObject;
  }
};

const update = async (id, newObject) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, newObject);
    return response.data;
  } catch (error) {
    // Fallback: no se puede actualizar en db.json, solo retorna el objeto
    return newObject;
  }
};

const deletePerson = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    // Fallback: no se puede eliminar en db.json, retorna el id
    return id;
  }
};

export default { getAll, create, update, deletePerson };
