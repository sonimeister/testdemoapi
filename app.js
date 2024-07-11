const express = require("express");
const coffee = require("./db/coffee.json");

// Set up the express app
const app = express();

//Updating Code
// get all coffee types
app.get("/api/v1/coffee", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Coffee list",
    coffee: coffee,
  });
});
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
