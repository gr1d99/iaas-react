import axios from 'axios';

const BASE_URL = process.env.REACT_APP_DEVELOPMENT_ENDPOINT;

const axiosInstance = axios.create({
    baseURL: BASE_URL
});

export default axiosInstance;
