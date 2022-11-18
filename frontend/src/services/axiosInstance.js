import axios from "axios";

// We put the main url of the API in a constant
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
});

export default axiosInstance;
