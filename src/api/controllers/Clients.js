import Axios from "api/AuthApi";
export const Clientes = async (id) => {
  try {
    const response = await Axios.get(`/clientes/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createClients = async (formData) => {
  try {
    const response = await Axios.post(`/clientes/`, formData);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
