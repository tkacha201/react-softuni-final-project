const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
require("dotenv").config();
const app = express();

const secretSalt = bcrypt.genSaltSync(10);
const jwtSecret = "randomkey123";

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userObj = await User.findOne({ email });
  if (userObj) {
    const passwordOkay = bcrypt.compareSync(password, userObj.password);
    if (passwordOkay) {
      jwt.sign(
        { email: userObj.email, id: userObj._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res
            .cookie("token", token)
            .json({ message: "password is ok", user: userObj });
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.status(404).json("user not found");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });
  res.json(newName);
});

app.listen(4000);
