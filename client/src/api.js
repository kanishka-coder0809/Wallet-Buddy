// src/api.js
import axios from "axios";

// Use backend URL from env (no trailing slash), fallback to localhost
const BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") ||
  "http://localhost:8080/api/transactions";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// API calls
export const getTransactions = () => api.get("/");            // → GET /api/transactions/
export const addTransaction = (data) => api.post("/", data);  // → POST /api/transactions/
export const deleteTransaction = (id) => api.delete(`/${id}`); // → DELETE /api/transactions/:id
