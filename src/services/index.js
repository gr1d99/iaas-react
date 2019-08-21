import axios from 'axios';
import { Cookies } from "react-cookie";

const BASE_URL = process.env.REACT_APP_DEVELOPMENT_ENDPOINT;

const axiosInstance = axios.create({
    baseURL: BASE_URL
});

axiosInstance.interceptors.request.use((config) => {
    if (!config.headers["X-Access-Token"]) {
        config.headers["X-Access-Token"] = new Cookies().get("jwtToken")
    }
    return config
}, (error) => {
    return Promise.reject(error)
});

export default axiosInstance;
