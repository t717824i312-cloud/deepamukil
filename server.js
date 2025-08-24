<<<<<<< HEAD
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
=======
const express = require("express");
const path = require("path");

const app = express();
const PORT = 51091; // or process.env.PORT

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Default route → loads index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
>>>>>>> 994bd3395f759771e9cf467c23f230e5a7c554fd
