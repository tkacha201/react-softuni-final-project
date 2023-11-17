const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.json("Hi from test");
});

app.listen(4000);
