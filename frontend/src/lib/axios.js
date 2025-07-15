import axios from "axios";
const serverUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
	baseURL: serverUrl,
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
