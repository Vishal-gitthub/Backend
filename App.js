const dotenv = require("dotenv");
const express = require("express");
dotenv.config();
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("welcome to page");
});
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
