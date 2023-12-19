const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User.js");
const Experience = require("./models/Experience.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const multer = require("multer");
const fs = require("fs");
const BookingModel = require("./models/Booking.js");
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

const photosMiddleware = multer({ dest: "uploads/" });

app.post("/upload", photosMiddleware.array("photos", 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const extension = parts[parts.length - 1];
    const newPath = path + "." + extension;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace("uploads\\", ""));
  }
  res.json(uploadedFiles);
});

app.post("/experiences", async (req, res) => {
  const { token } = req.cookies;
  const {
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    duration,
    maxGroupSize,
    price,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const ExpObj = await Experience.create({
      owner: userData.id,
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      duration,
      maxGroupSize,
      price,
    });
    res.json(ExpObj);
  });
});

app.get("/user-experiences", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await Experience.find({ owner: id }));
  });
});

app.get("/experiences/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await Experience.findById(id));
});

app.put("/experiences", async (req, res) => {
  const { token } = req.cookies;
  const {
    id,
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    duration,
    maxGroupSize,
    price,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const experienceObj = await Experience.findById(id);
    if (userData.id === experienceObj.owner.toString()) {
      experienceObj.set({
        title,
        address,
        photos: addedPhotos,
        description,
        perks,
        extraInfo,
        duration,
        maxGroupSize,
        price,
      });
      await experienceObj.save();
      res.json("ok");
    }
  });
});

app.get("/experiences", async (req, res) => {
  res.json(await Experience.find());
});

app.delete("/experiences/:id", async (req, res) => {
  const { token } = req.cookies;
  const { id } = req.params;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const experienceObj = await Experience.findById(id);
    if (userData.id === experienceObj.owner.toString()) {
      await Experience.findByIdAndDelete(id);
      res.json("ok");
    }
  });
});

app.post("/booking", (req, res) => {
  const { experience, date, groupSize, name, mobile } = req.body;

  BookingModel.create({
    experience,
    date,
    groupSize,
    name,
    mobile,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

app.listen(4000);
