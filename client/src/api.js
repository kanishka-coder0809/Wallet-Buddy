import axios from "axios";

// Use local backend
const BASE_URL = "http://localhost:5000/api/transactions";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// API calls
export const getTransactions = () => api.get("/");            
export const addTransaction = (data) => api.post("/", data);  
export const deleteTransaction = (id) => api.delete(`/${id}`);
