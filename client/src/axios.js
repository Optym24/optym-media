import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://optym-media-1.onrender.com/api/",
  withCredentials: true,
});