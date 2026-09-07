import axios from "axios";

export const axiosInsatnce = new axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});
