import axios from "axios";
export const baseApi = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

baseApi.interceptors.request.use(
  (config) => {
    config.headers["x-custom-lang"] = localStorage.getItem("VIGLO_LANGUAGE");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
