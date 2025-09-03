const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

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

// MongoDB connection + start server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ Mongo Error:", err));
