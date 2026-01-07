import axios from "axios";
import { API_URL } from "./env";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      error.message = error.response.data.message ?? error.message;
    }

    return Promise.reject(error);
  }
);
