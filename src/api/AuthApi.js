import axios from "axios";
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Axios = axios.create({
  baseURL: `https://65ee4aa908706c584d9b38f2.mockapi.io/v1`,
  headers: { "content-type": "application/json"},
});

// Axios.interceptors.request.use(async (config) => {
//   const token = window.localStorage.getItem("access");
//   const newAcessToken = window.localStorage.getItem("newAcessToken");
 
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   if (newAcessToken) {
//     config.headers.Authorization = `Bearer ${newAcessToken}`;
//   }
  
//   return config;
// });

export default Axios;