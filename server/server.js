const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Test route to check backend is working
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working fine 🚀" });
});

// API Routes
const transactionRoutes = require("./routes/transactions");
app.use("/api/transactions", transactionRoutes);

// ✅ Serve frontend (React build)
const buildPath = path.join(__dirname, "build");
app.use(express.static(buildPath));

// Catch-all → send React index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// MongoDB connection + start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ Mongo Error:", err));
