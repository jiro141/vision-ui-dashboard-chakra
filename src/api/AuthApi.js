import axios from "axios";
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Axios = axios.create({
  baseURL: `http://127.0.0.1:8000`,
  headers: { "content-type": "application/json"},
});

Axios.interceptors.request.use(async (config) => {
   const token = window.localStorage.getItem("token");
   const newAcessToken = window.localStorage.getItem("newAcessToken");
 
   if (token) {
     config.headers.Authorization = `Bearer ${token}`;
   }
   if (newAcessToken) {
     config.headers.Authorization = `Bearer ${newAcessToken}`;
   }
  
   return config;
 });

export default Axios;