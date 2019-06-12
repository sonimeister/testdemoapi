const express = require("express");
const db = require("./db/db");

// Set up the express app
const app = express();

// get all todos
app.get("/api/v1/coffee", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Hello from review app",
    todos: db
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
