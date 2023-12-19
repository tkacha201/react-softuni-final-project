const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  duration: String,
  maxGroupSize: String,
  price: Number,
});

const ExperienceModel = mongoose.model("Experience", experienceSchema);

module.exports = ExperienceModel;
