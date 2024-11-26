import axios from "axios";

export const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`
})

api.interceptors.request.use(config => {
    const token = sessionStorage.getItem(import.meta.env.VITE_SESSION_KEY)
    // console.log(token);
    config.headers.Authorization = token
    return config
})