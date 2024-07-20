require("dotenv").config();
const express = require("express");

const port = process.env.PORT;

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/About.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/Contact.html");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
