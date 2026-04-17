import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
});

instance.interceptors.request.use((config) => {
    try {
        const user = JSON.parse(localStorage.getItem("shastho_user") || "{}");
        if (user?.token) {
            config.headers.Authorization = `Bearer ${user.token}`;
        }
    } catch { }
    return config;
});

export default instance;