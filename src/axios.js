import axios from "axios";


const BASE_URL = "https://finance-tracking-a52p.vercel.app/api" 

const axiosInstance=axios.create({
    baseURL:BASE_URL,
});

export default axiosInstance;   