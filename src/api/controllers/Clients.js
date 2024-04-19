import Axios from "api/AuthApi";
export const Clientes = async (id) => {
    try {
        const response = await Axios.get(`/clientes/`)
         console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}