//jshint esversion:6
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("<h1> HELLO </h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/faizan", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/faizan", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/faizan", (req, res) => {
  res.sendStatus(200);
});

app.get("/contact", (req, res) => {
  res.send("Contact me at fk29837@gmail.com ");
});

app.get("/about", (req, res) => {
  res.send("Hi my name is Faizan");
});

app.get("/Hobby", (req, res) => {
  res.send("cofee , code");
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
