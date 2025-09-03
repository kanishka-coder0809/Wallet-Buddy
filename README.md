# 💸 WalletBuddy Expense Tracker (MERN Stack)

A full-stack expense tracker built using **MongoDB, React, and Node.js**.
This app allows users to add income/expense transactions and view their financial summary live.

---

## 🚀 Features

* ➕ Add new income and expense transactions
* 📜 View complete transaction history
* 📊 Live-updating summary: Balance, Income, Expense
* 🌐 Connected to MongoDB (Atlas or local) for persistent data
* ⚡ Built with **Vite + React** for a fast frontend
* 🔄 Real-time updates using **Context API**

---

## 🛠 Tech Stack

| Frontend     | Backend           | Database      |
| ------------ | ----------------- | ------------- |
| React + Vite | Node.js + Express | MongoDB Atlas |

Other tools used:

* Axios
* Context API
* Dotenv
* Mongoose
* Cors
* Nodemon

---

## 🗂 Folder Structure

```
Wallet-Buddy/
├─ client/                 # React frontend
│  ├─ dist/                # Production build output
│  ├─ node_modules/        # Frontend dependencies
│  ├─ public/              # Static files
│  ├─ src/                 # React components, pages, context, styles
│  ├─ .env                 # Frontend environment variables
│  ├─ index.html
│  ├─ package.json
│  └─ vite.config.js
├─ server/                 # Node.js + Express backend
│  ├─ build/               # Backend build output (optional)
│  ├─ controllers/         # Controller functions for routes
│  ├─ models/              # Mongoose schemas
│  ├─ node_modules/        # Backend dependencies
│  ├─ routes/              # Express routes
│  ├─ .env                 # Backend environment variables
│  ├─ package.json
│  └─ server.js
├─ .gitignore
├─ package.json            # Root package.json (optional)
└─ README.md
```

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/kanishka-coder0809/expense-tracker.git
cd expense-tracker

# 2. Install backend dependencies
cd server
npm install

# 3. Install frontend dependencies
cd ../client
npm install
```

---

## ⚡ Running Locally

### Backend

```bash
cd server
npm run dev        # runs server on http://localhost:5000
```

### Frontend

```bash
cd client
npm run dev        # runs frontend on http://localhost:5173 (Vite)
```

* Make sure the **frontend `api.js`** points to `http://localhost:5000/api/transactions` to connect to the local backend.

---

## ✅ Testing API

* Test backend: `http://localhost:5000/api/test` → should return:

```json
{"message":"Backend is working fine 🚀"}
```

* Test transactions: `http://localhost:5000/api/transactions` → returns current transactions (empty array if none).

---

