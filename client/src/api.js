// src/api.js
import axios from "axios";

// Use backend URL from env, fallback to localhost
const BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// API calls
export const getTransactions = () => api.get("/");
export const addTransaction = (data) => api.post("/", data);
export const deleteTransaction = (id) => api.delete(`/${id}`);
