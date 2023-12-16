const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User.js");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const app = express();

const secretSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("Hi from test2");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userObj = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, secretSalt),
    });
    res.json(userObj);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.listen(4000);
