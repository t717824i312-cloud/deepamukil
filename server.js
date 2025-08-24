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
