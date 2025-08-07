import axios from "axios";

export default axios.create({
  baseURL: process.env.API_BASE_URL || "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
