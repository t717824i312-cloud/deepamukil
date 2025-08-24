const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("✅ Fee Portal Backend is Live!");
});

// Example API route
app.get("/api/fees", (req, res) => {
  res.json({ student: "Deepa", amount: 5000, status: "Paid" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
