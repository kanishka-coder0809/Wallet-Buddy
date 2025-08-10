const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Test route to check backend is working
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working fine 🚀' });
});

// API Routes
const transactionRoutes = require('./routes/transactions');
app.use('/api/transactions', transactionRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  // Path to dist folder (inside server)
  const distPath = path.join(__dirname, 'dist');
  app.use(express.static(distPath));

  // All non-API routes → index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  // Root health check in development
  app.get('/', (req, res) => {
    res.send('Backend is running 🚀');
  });
}

// MongoDB connection + start server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ Mongo Error:', err));
