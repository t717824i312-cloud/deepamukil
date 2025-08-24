const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route (just a simple response)
app.get("/", (req, res) => {
  res.send("✅ Fee Portal Backend is Live!");
});

// Example API route (you can add your own later)
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working fine 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
