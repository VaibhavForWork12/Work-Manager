import axios from "axios";

export const httpAxios = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});