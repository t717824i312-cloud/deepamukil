// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Root route (so https://deepamukil.onrender.com/ works)
app.get("/", (req, res) => {
  res.json({
    service: "fee-portal",
    status: "running ✅",
    time: new Date().toISOString(),
  });
});

// Example API route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from backend API 👋" });
});

// IMPORTANT: Render provides PORT in process.env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
