import axios from "axios";

export const api = axios.create({
  baseURL: "https://marketin-site-backend-todoou.gtrphk.easypanel.host/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);