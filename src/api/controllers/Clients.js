import Axios from "api/AuthApi";

export const Clientes = async () => {
  try {
    const response = await Axios.get(`/full_Clientes/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los clientes:', error.response ? error.response.data : error.message);
  }
};

export const createClients = async (formData) => {
  try {
    const response = await Axios.post(`/Clientes/`, formData);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error('Error al crear el cliente:', error.response ? error.response.data : error.message);
  }
};
